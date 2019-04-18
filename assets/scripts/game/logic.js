'use strict'

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

class Game {
  constructor (playerOne, playerTwo) {
    this.board = ['', '', '', '', '', '', '', '', '']
    this.playerOne = playerOne
    this.playerTwo = playerTwo
    this.winner = ''
  }

  resetBoard () {
    this.currentPlayer = 'X'
    this.gameIsOver = false
    this.numberOfPlays = 0
    this.winner = ''
    this.board = ['', '', '', '', '', '', '', '', '']
  }

  checkForWinCondition () {
    // [0] [1] [2]
    // [3] [4] [5]
    // [6] [7] [8]
    for (let i = 0; i < winCombos.length; i++) {
      let combo = winCombos[i]
      if ((this.board[combo[0]] === this.board[combo[1]] && this.board[combo[1]] === this.board[combo[2]]) && this.board[combo[0]] !== '' && this.board[combo[1]] !== '' && this.board[combo[2]] !== '') {
        this.gameIsOver = true
        this.winner = this.currentPlayer
        return true
      }
    }

    return false
  }

  updateBoard (index) {
    if (index < 0 || index > 8) {
      return
    }

    if (this.board[index] !== '' || this.gameIsOver) {
      return
    }

    this.numberOfPlays++
    this.board[index] = this.currentPlayer

    if (this.checkForWinCondition()) {
      $('#endgame-message').text(`${this.currentPlayer} wins! Click the end button to continue`).css('color', 'green')
      // check for tie
    } else if (this.numberOfPlays === 9) {
      this.gameIsOver = true
      $('#endgame-message').text(`The game is a tie! Press end game to continue`).css('color', 'green')
    }

    return {
      index: index,
      currentPlayer: this.currentPlayer,
      gameIsOver: this.gameIsOver
    }
  }
}

export default Game
