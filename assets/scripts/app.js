'use strict'

const userEvents = require('./auth/events.js')
const exampleEvents = require('./examples/events.js')
const ui = require('./auth/ui.js')
const api = require('./auth/api.js')

$(() => {
  userEvents.addHandlers()

  $('.startButton').on('click', function () {
    api.createGame()
      .then(ui.createGameSuccess)
      .catch(ui.createGameFailure)
  })
})
