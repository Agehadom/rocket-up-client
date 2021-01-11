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

  $('#createTraining').on('submit', appEvents.onCreateTraining)
  $('#updateTraining').on('submit', appEvents.onUpdateTraining)
  $('#deleteTraining').on('submit', appEvents.onDeleteTraining)
  $('#indexTrainingButton').on('click', appEvents.onIndexTraining)
  $('#searchTraining').on('submit', appEvents.onSearchTraining)

  $('#createTraining').on('click', appEvents.onCreateTrainingClick)
  $('#updateTraining').on('click', appEvents.onUpdateTrainingClick)
  $('#deleteTraining').on('click', appEvents.onDeleteTrainingClick)
  $('#searchTraining').on('click', appEvents.onSearchTrainingClick)

})
