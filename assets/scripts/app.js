'use strict'

import Game from './game/logic'
import { onPlayMade } from './auth/api'
// import { showStats } from './auth/api';

const userEvents = require('./auth/events.js')

$(() => {
  // Api handlers
  $('#signup-message').hide()
  $('#signin-message').hide()
  $('#changepassword-message').hide()
  $('.container-fluid').hide()
  $('#reset-button').hide()
  $('#show-stats').hide()
  $('#sign-in').hide()
  $('#change-password').hide()
  userEvents.addHandlers()
  const reset = () => {
    gameLogic.resetBoard()
    for (let i = 0; i < 9; i++) {
      $(`#${i}`).text('')
    }
  }

  // Player and win condition setup
  const gameLogic = new Game('X', 'O')
  reset()

  $('#reset-button').on('click', function () {
    reset()
    $('.container-fluid').show()
  })

  // Click handler
  $('.tic-box').on('click', function (event) {
    const id = event.target.id
    const update = gameLogic.updateBoard(id)
    if (update) {
      onPlayMade(update.index, update.currentPlayer, update.gameIsOver)
      $(this).text(gameLogic.currentPlayer)
      if (gameLogic.checkForWinCondition()) {
        // end the game
      }

      gameLogic.currentPlayer === gameLogic.playerOne ?
        gameLogic.currentPlayer = gameLogic.playerTwo :
        gameLogic.currentPlayer = gameLogic.playerOne
    }
  })
})
