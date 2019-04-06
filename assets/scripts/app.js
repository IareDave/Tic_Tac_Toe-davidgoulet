'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const userEvents = require('./auth/events.js')
const exampleEvents = require('./examples/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  /*
  var sizeTheOverlays = function () {
    $('.overlay').resize().each(function () {
      var h = $(this).parent().outerHeight()
      var w = $(this).parent().outerWidth()
      $(this).css('height', h)
      $(this).css('width', w)
    })
  }

  sizeTheOverlays()

  var width = $(window).width()
  $(window).resize(function () {
    if ($(this).width() !== width) {
      width = $(this).width()
      sizeTheOverlays()
    }
  })
  */

  // Api handlers
  userEvents.addHandlers()
  exampleEvents.addHandlers()
  // Player and win condition setup
  const gameLogic = {
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
    ],
    gameBoard:
    ['', '', '',
      '', '', '',
      '', '', '']
  }

  // Set HTML tictactoe boxes to variable
/*
  const box1 = document.getElementsByClassName('.box1')
  const box2 = document.getElementsByClassName('.box2')
  const box3 = document.getElementsByClassName('.box3')
  const box4 = document.getElementsByClassName('.box4')
  const box5 = document.getElementsByClassName('.box5')
  const box6 = document.getElementsByClassName('.box6')
  const box7 = document.getElementsByClassName('.box7')
  const box8 = document.getElementsByClassName('.box8')
  const box9 = document.getElementsByClassName('.box9')
*/
  const cellArray = Array.from(document.querySelectorAll('.tic-box'))

  cellArray.forEach(function (cell) {
    console.log(cell)
    cell.addEventListener('click', function () {
      // $(this) is able to show the different div elements used for each box
      console.log('this is equal to ', $(this))
      console.log('cell is equal to ', cell)
      //
      cellArray.splice(cellArray, 1, 'O')
      console.log(cellArray)
    })
  })

/*
  const onClick = function (position, player) {
    $('.tic-box').on('click', function () {
      // Replaces element of array
      cellArray.splice(position, 1, player)
      console.log(cellArray)
    })
  }
  onClick(2, gameLogic.playerOne)
  */


  cellArray.forEach(function (cell) {
    console.log(cell)
    cell.addEventListener('click', function () {
      console.log('this is equal to ', $(this))
      console.log('cell is equal to ', cell)

      // $(this) is able to show the different div elements used for each box
      cellArray.splice(cellArray, 1, 'O')
      console.log(cellArray)
    })
  })


if ($(this).hasClass('tic-box')) {
      // Replaces element of array
        gameLogic.gameBoard.splice(position, 1, player)
        console.log(gameLogic.gameBoard)
      }

  for (let i = 0; i < gameLogic.gameBoard.length; i++) {
    // Clears both arrays
    cellArray[i] = gameLogic.gameBoard[i]
  }

  const onClick = function (position, player) {
    $('.tic-box').on('click', function () {
      // Replaces element of array
      gameLogic.gameBoard.splice(position, 1, player)
      console.log(gameLogic.gameBoard)
    })
  }
  onClick(1, gameLogic.playerOne)
})

  // Click handler
  $('.tic-box').on('click', function () {
    // Supposed to prevent placing marks on occupied spots
    // Supposed to display warning message if spot is unavailable
    let i
    if (cellArray[i] !== ('X' || 'O')) {
      if (gameLogic.playerCounter % 2 === 0) {
        // Let player know it is X's turn
        cellArray[i] = $(this).val(gameLogic.playerOne)
        /*
        const updateCellArray = function () {
          document.getElementByClass
        }
        */
        console.log()
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
    let i
    // Supposed to check cell for text
    if (cellArray[i] === ('X' || 'O')) {
      console.log('busted')
    }

    // Check for winner
    // Compare cells.id with winCombos array
    // Inform user of game ending condition
    // Do not allow users to place mark after game over
  })
})
