'use strict'

const store = require('../store.js')

export const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('#signup-message').show()
  $('#signup-message').text('Sign up successful! Sign in to play the game')
  $('#signup-message').css('color', 'green')
  $('#sign-in').show()
  $('#sign-up').hide()
}

export const signUpFailure = function (data) {
  $('form').trigger('reset')
  $('#signup-message').show()
  $('#signup-message').text('Sign up failed!')
  $('#signup-message').css('color', 'red')
}

export const signInSuccess = function (data) {
  $('form').trigger('reset')
  $('#reset-button').show()
  $('#signin-message').show()
  $('#signin-message').text('Sign in successful! Click New Game to Begin')
  $('#signin-message').css('color', 'green')
  $('#change-password').show()
  $('#show-stats').show()
  $('#signup-message').hide()
  $('#sign-up').hide()
  $('#sign-in').hide()
  store.user = data.user
}

export const signInFailure = function (data) {
  $('form').trigger('reset')
  $('#signin-message').html('Sign in failed!')
  $('#signin-message').css('color', 'red')
}

export const changePwSuccess = function (data) {
  $('form').trigger('reset')
  $('#changepassword-message').show()
  $('#signin-message').hide()
  $('#changepassword-message').text(`You have successfully changed your password. Press new game to continue`).css('color', 'green')
  // store.user = data.user
}

export const changePwFailure = function (data) {
  $('form').trigger('reset')
  $('#signin-message').hide()
  $('#changepassword-message').show()
  $('#changepassword-message').text(`Something went wrong`).css('color', 'red')
}

export const signOutSuccess = function (data) {
  $('form').trigger('reset')
  $('#show-stats').hide()
  store.user = null
}

export const signOutFailure = function (data) {
}

export const newGameSuccess = function (data) {
  $('#signin-message').hide()
  $('#signup-message').hide()
  $('#changepassword-message').hide()
  store.game = data.game
}

export const newGameFailure = function (data) {
}

export const showStatsSuccess = function (data) {
}

export const showStatsFailure = function (data) {
}
