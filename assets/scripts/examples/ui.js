'use strict'

const createExampleSuccess = function (data) {
  console.log('created example success!', data)
}

const createExampleFailure = function (data) {
  console.log('created example failed!', data)
}

const indexExampleSuccess = function (data) {
  console.log('index example success!', data)
}

const indexExampleFailure = function (data) {
  console.log('index example failed!', data)
}

module.exports = {
  createExampleFailure,
  createExampleSuccess,
  indexExampleFailure,
  indexExampleSuccess
}
