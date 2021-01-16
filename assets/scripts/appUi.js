const store = require('./store.js')
//const break = ('\n')

const onCreateTraining = function () {
  $('.top_bar h2').html("You made a training pack! Nice.")
  $('#createTrainingModalLabel').text("Training has been added to the database!")
  $('form').trigger('reset')
}

const onUpdateTraining = function () {
  $('.top_bar h2').html("Thanks for updating one of your packs.")
  $('#updateTrainingModalLabel').text("Training has been updated!")
  $('form').trigger('reset')
}

const onIndexTraining = function (res) {
  const trainingListing = res.trainings

  //const trainingTXT = JSON.stringify(res.trainings[0].name)
  trainingListing.forEach(training => {
    $('.indexBody').append("Search ID: " + training._id + "<br>")
    $('.indexBody').append("Name: " + training.name + "<br>")
    $('.indexBody').append("Type: " + training.type + "<br>")
    $('.indexBody').append("Difficulty: " + training.difficulty + "<br>")
    $('.indexBody').append("Code: " + training.code + "<br>")
    $('.indexBody').append("-------------------------------------" + "<br>")
  })

  $('form').trigger('reset')
  //$('.indexBody p').html(trainingTXT)
}

const onDeleteTraining = function (res) {
  //const trainingListing = res.trainings
  $('.top_bar h2').text("You murdered that poor, little training pack.");
  $('#deleteTrainingModalLabel').html("Training Bombed!")
  $('form').trigger('reset')
}

const onSearchTraining = function (res) {
  const trainingListing = res.training

  trainingListing.forEach(training => {
    $('.search-output p').append("Name: " + training.name + "<br>")
    $('.search-output p').append("Type: " + training.type + "<br>")
    $('.search-output p').append("Difficulty: " + training.difficulty + "<br>")
    $('.search-output p').append("Code: " + training.code + "<br>")
  })

  $('form').trigger('reset')
  //$('.search-output').append(res)
}

const onFailure = function () {
  $('.top_bar h2').html("Critical Error<br>If you see this, something odd happened!<br>The API may be unavailable!");
}

module.exports = {onCreateTraining, onUpdateTraining, onIndexTraining, onDeleteTraining, onSearchTraining, onFailure};
