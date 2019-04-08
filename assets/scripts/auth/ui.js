'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  console.log('sign up success ran with the data: ', data)
  $('#signup').html('Sign up successful')
  $('#signup').css('color', 'green')
  $('form').trigger('reset')
  $('#sign-up').hide()
}

const signUpFailure = function (data) {
  console.log('sign up failure ran with the data: ', data)
  $('#signup').html('Sign up failed')
  $('#signup').css('color', 'red')
}

const signInSuccess = function (data) {
  console.log('sign in success ran with the data: ', data)
  $('#signin').html('Sign in successful')
  $('#signin').css('color', 'green')
  store.user = data.user
}

const signInFailure = function (data) {
  console.log('sign in failure ran with the data: ', data)
}

const createGameSuccess = function (response) {
  store.game = response.game
}

const createGameFailure = function (response) {
  console.log(response)
}

const changePwSuccess = function (data) {
  console.log('change password success')
  store.user = data.user
}

const changePwFailure = function (data) {
  console.log('change password failure')
}

const signOutSuccess = function (data) {
  console.log('sign out success')
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = function (data) {
  console.log('sign out failure')
}

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInFailure,
  signInSuccess,
  changePwFailure,
  changePwSuccess,
  signOutFailure,
  signOutSuccess
}
