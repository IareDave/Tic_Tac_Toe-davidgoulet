'use strict'

const config = require('../config.js')
const store = require('../store.js')
const ui = require('./ui.js')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + 'games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateGame = function (currentMove, currentIndex, over) {
  if (over) {
    over = true
  } else {
    over = false
  }
  const currentGameId = store.game.id
  const gameLogic = {
    'game': {
      'cell': {
        'index': currentIndex,
        'value': currentMove
      },
      'over': over
    }
  }
  return $.ajax({
    url: config.apiUrl + 'games/' + currentGameId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: gameLogic
  })
}

const getGames = function () {
  let content = ''
  return $.ajax({
    url: config.apiUrl + 'games?over=true',
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getGames,
  updateGame,
  createGame
}
