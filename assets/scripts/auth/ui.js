'use strict'

const store = require('../store.js')

export const signUpSuccess = function (data) {
  console.log('sign up success ran with the data: ', data)
  $('form').trigger('reset')
}

export const signUpFailure = function (data) {
  console.log('sign up failure ran with the data: ', data)
}

export const signInSuccess = function (data) {
  console.log('sign in success ran with the data: ', data)
  store.user = data.user
}

export const signInFailure = function (data) {
  console.log('sign in failure ran with the data: ', data)
}

export const changePwSuccess = function (data) {
  console.log('change password success')
  store.user = data.user
}

export const changePwFailure = function (data) {
  console.log('change password failure')
  console.log(data);
}

export const signOutSuccess = function (data) {
  console.log('sign out success')
  $('form').trigger('reset')
  store.user = null
}

export const signOutFailure = function (data) {
  console.log('sign out failure')
}

export const newGameSuccess = function (data) {
  console.log('new game success');
  console.log(data);
  store.game = data.game;
}

export const newGameFailure = function (data) {
  console.log('new game failure');
  console.log(data);
}

export const showStatsSuccess = function (data) {
  console.log('show game success');
  console.log(data);
}

export const showStatsFailure = function (data) {
  console.log('show game failure');
  console.log(data);
}



