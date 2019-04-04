'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  console.log('sign up success ran with the data: ', data)
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  console.log('sign up failure ran with the data: ', data)
}

const signInSuccess = function (data) {
  console.log('sign in success ran with the data: ', data)
  store.user = data.user
}

const signInFailure = function (data) {
  console.log('sign in failure ran with the data: ', data)
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
