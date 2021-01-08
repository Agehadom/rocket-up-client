'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userEvents = require('/events.js')
const appEvents = require('/appEvents.js')

$(() => {
  // User
  $('#register').on('submit', userEvents.onRegisterUser)
  $('#register').on('click', userEvents.onRegisterClick)
  $('#log-in').on('submit', userEvents.onSignInUser)
  $('#log-out').on('click', userEvents.onSignOutUser)
  $('#change-pass').on('submit', userEvents.onChangePass)
  $('#change-pass').on('click', userEvents.onChangePassClick)

  // App
  $('#trainingCreate').on('click', appEvents.onTrainingClick)

})
