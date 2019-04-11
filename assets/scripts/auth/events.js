'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

export const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

export const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

export const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFailure)
}

export const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then()
    .catch()
}

export const onNewGame = function (event) {
  event.preventDefault()
  $('#endgame-message').text('')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

export const onShowStats = function (event) {
  event.preventDefault()
  $('#endgame-message').text(`This is game number ${store.game.id}`)
  api.showStats()
    .then(ui.showStatsSuccess)
    .catch(ui.showStatsFailure)
}

export const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#reset-button').on('click', onNewGame)
  $('#show-stats').on('click', onShowStats)
}
