'use strict'

const store = require('../store.js')

export const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('#signup-message').show()
  $('#signup-message').text('Sign up successful! Sign in to play the game')
  $('#signup-message').css('color', 'green')
  $('#sign-in').show()
  // $('#sign-up').hide()
}

export const signUpFailure = function (data) {
  $('form').trigger('reset')
  $('#signup-message').show()
  $('#signup-message').text('Sign up failed!')
  $('#signup-message').css('color', 'red')
}

export const signInSuccess = function (data) {
  store.user = data.user
  store.game = data.game
  $('form').trigger('reset')
  $('#reset-button').show()
  $('#signin-message').show()
  $('#signin-message').text('Sign in successful! Click New Game to Begin')
  $('#signin-message').css('color', 'green')
  $('#change-password').show()
  $('#show-stats').hide()
  $('#signup-message').hide()
  $('#sign-out').show()
  // $('#sign-up').hide()
  $('#sign-in').hide()
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
  $('#signup-message').hide()
  $('#signin-message').hide()
  $('#changepassword-message').hide()
  $('.container-fluid').hide()
  $('#reset-button').hide()
  $('#show-stats').hide()
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#showstats-message').hide()
  $('#endgame-message').hide()
  store.user = null
  store.game = null
}

export const signOutFailure = function (data) {
  $('form').trigger('reset')
  $('#signout-message').text(`Something went wrong`).css('color', 'red')
}

export const newGameSuccess = function (data) {
  $('#signin-message').hide()
  $('#signup-message').hide()
  $('#changepassword-message').hide()
  store.game = data.game
  $('#show-stats').show()
}

export const newGameFailure = function (data) {
  $('#newgame-message').text(`Something went wrong`).css('color', 'red')
}

export const showStatsSuccess = function (data) {
  $('#showstats-message').show()
  $('#showstats-message').text(`You have played ${data.games.length} games`).css('color', 'green')
}

export const showStatsFailure = function (data) {
  $('#showstats-message').show()
  $('#showstats-message').text(`Something went wrong`).css('color', 'red')
}
