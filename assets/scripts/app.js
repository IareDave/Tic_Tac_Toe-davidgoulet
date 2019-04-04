'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
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
    if (cells !== ('X' || 'O')) {
      if (gameLogic.playerCounter % 2 === 0) {
        $(this).append(gameLogic.playerOne)
        gameLogic.playerCounter++
      } else {
        $(this).append(gameLogic.playerTwo)
        gameLogic.playerCounter++
      }
    }
  })

  // Clear game board
  $('button').on('click', function () {
    $('.tic-box').text('')
  })
})
