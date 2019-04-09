'use strict'

const store = require('../store.js')

export const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('.signUpLabel').html('Sign up successful! Sign in to play the game')
  $('#sign-up').css('color', 'green')
}

export const signUpFailure = function (data) {
  $('#sign-up').html('Sign up failed!')
  $('#sign-up').css('color', 'red')
}

export const signInSuccess = function (data) {
  $('#reset-button').show()
  $('#sign-in').html('Sign in successful! Click New Game to Begin')
  $('#sign-in').css('color', 'green')
  store.user = data.user
}

export const signInFailure = function (data) {
  $('#sign-up').html('Sign in failed!')
  $('#sign-up').css('color', 'red')
}

export const changePwSuccess = function (data) {
  store.user = data.user
}

export const changePwFailure = function (data) {
  console.log(data)
}

export const signOutSuccess = function (data) {
  $('form').trigger('reset')
  store.user = null
}

export const signOutFailure = function (data) {
}

export const newGameSuccess = function (data) {
  store.game = data.game
}

export const newGameFailure = function (data) {
}

export const showStatsSuccess = function (data) {
}

export const showStatsFailure = function (data) {
}



