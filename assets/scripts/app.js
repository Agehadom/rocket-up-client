'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userEvents = require('./events.js')
const appEvents = require('./appEvents.js')

$(() => {
  // Site
  $('.auth').hide()

  $('#register').on('submit', userEvents.onRegisterUser)
  $('#register').on('click', userEvents.onRegisterClick)
  $('#log-in').on('submit', userEvents.onSignInUser)
  $('#log-out').on('click', userEvents.onSignOutUser)
  $('#change-pass').on('submit', userEvents.onChangePass)
  $('#change-pass').on('click', userEvents.onChangePassClick)

  // App

  $('#createTraining').on('submit', appEvents.onCreateTraining)
  $('#updateTraining').on('submit', appEvents.onUpdateTraining)
  $('#deleteTraining').on('submit', appEvents.onDeleteTraining)
  $('#searchTraining').on('submit', appEvents.onSearchTraining)

  $('#createTrainingButton').on('click', appEvents.onCreateTrainingClick)
  $('#updateTrainingButton').on('click', appEvents.onUpdateTrainingClick)
  $('#deleteTrainingButton').on('click', appEvents.onDeleteTrainingClick)
  $('#indexTrainingButton').on('click', appEvents.onIndexTraining)
  $('#searchTrainingButton').on('click', appEvents.onSearchTrainingClick)

})
