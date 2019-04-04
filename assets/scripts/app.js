'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const userEvents = require('./auth/events.js')
const exampleEvents = require('./examples/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  userEvents.addHandlers()
  exampleEvents.addHandlers()
  // Player and win condition setup
  const gameLogic = {
    gameBoard: 1,
    playerOne: 'X',
    playerTwo: 'O',
    playerCounter: 0,
    winCombos: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ]
  }

  // Set HTML tictactoe boxes to variable
  const cells = document.querySelectorAll('.tic-box')

  // Click handler
  $('.tic-box').on('click', function () {
    // Supposed to prevent placing marks on occupied spots
    // Supposed to display warning message if spot is unavailable
    if (cells.text !== ('X' || 'O')) {
      if (gameLogic.playerCounter % 2 === 0) {
        // Let player know it is X's turn
        $(this).append(gameLogic.playerOne)
        gameLogic.playerCounter++
      } else {
        // Let player know it is O's turn
        $(this).append(gameLogic.playerTwo)
        gameLogic.playerCounter++
      }
    }
  })

  // Clear game board
  $('button').on('click', function () {
    $('.tic-box').text('')

    // Supposed to check cell for text
    if (cells.text === ('X' || 'O')) {
      console.log('busted')
    }

    // Check for winner
    // Compare cells.id with winCombos array
    // Inform user of game ending condition
    // Do not allow users to place mark after game over
  })
})
