const api = require('./api')
const ui_app = require('./appUi')
const store = require('./store')
const getFormFields = require('./../../lib/get-form-fields.js')

const onCreateTraining = function (event) {
  event.preventDefault()

  $('.top_bar h2').html("Pre API Blammed")

  const form = event.target
  const formData = getFormFields(form)

  console.log(formData);

  api.createtraining(formData)
  .then(ui_app.onCreateTraining)
  .catch(ui_app.onFailure)
}

const onCreateTrainingClick = function (event) {
  $('#createTrainingModalLabel').html("Create A Lesson")
}

const onUpdateTraining = function (event) {
  event.preventDefault()

  $('.top_bar h2').html("Pre API M.I.L.F")

  const form = event.target
  const formData = getFormFields(form)

  api.updatetraining(formData)
  .then(ui_app.onUpdateTraining)
  .catch(ui_app.onFailure)
}

const onUpdateTrainingClick = function (event) {
  $('#updateTrainingModalLabel').html("Update A Lesson")
}

const onDeleteTraining = function (event) {
  event.preventDefault()

  $('.top_bar h2').html("Pre API South")

  const form = event.target
  const formData = getFormFields(form)

  api.deletetraining(formData)
  .then(ui_app.onDeleteTraining)
  .catch(ui_app.onFailure)
}

const onDeleteTrainingClick = function (event) {
  $('#deleteTrainingModalLabel').html("Delete A Lesson")
}

const onIndexTraining = function (event) {
  event.preventDefault()

  $('.top_bar h2').html("Pre API Satin Panties")
  $('.indexBody p').html("")

  api.viewtraining()
  .then(ui_app.onIndexTraining)
  .catch(ui_app.onFailure)
}

const onSearchTraining = function (event) {
  event.preventDefault()

  $('.top_bar h2').html("Pre API Philiy")

  const form = event.target
  const formData = getFormFields(form)

  console.log(formData);

  api.searchtraining(formData)
  .then(ui_app.onSearchTraining)
  .catch(ui_app.onFailure)
}

const onSearchTrainingClick = function (event) {
  $('#searchTrainingModalLabel').html("Search For A Lesson")
}

module.exports = {onCreateTraining, onUpdateTraining, onDeleteTraining, onIndexTraining, onSearchTraining, onCreateTrainingClick, onUpdateTrainingClick, onDeleteTrainingClick, onSearchTrainingClick};
