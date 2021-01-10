const api = require('./api')
const ui_app = require('./appUi')
const store = require('./store')
const getFormFields = require('./../../lib/get-form-fields.js')

const onCreateTraining = function (event) {
  event.preventDefault()

  $('.top_bar h2').html("Pre API Blammed")

  api.createtraining()
  .then(ui_app.onIndexTraining)
  .catch(ui_app.onFailure)
}

const onUpdateTraining = function (event) {
  event.preventDefault()

  $('.top_bar h2').html("Pre API M.I.L.F")

  api.updatetraining()
  .then(ui_app.onIndexTraining)
  .catch(ui_app.onFailure)
}

const onDeleteTraining = function (event) {
  event.preventDefault()

  $('.top_bar h2').html("Pre API South")

  api.deletetraining()
  .then(ui_app.onIndexTraining)
  .catch(ui_app.onFailure)
}

const onIndexTraining = function (event) {
  event.preventDefault()

  $('.top_bar h2').html("Pre API Satin Panties")

  api.viewtraining()
  .then(ui_app.onIndexTraining)
  .catch(ui_app.onFailure)
}

const onSearchTraining = function (event) {
  event.preventDefault()

  $('.top_bar h2').html("Pre API Philiy")

  api.searchtraining()
  .then(ui_app.onIndexTraining)
  .catch(ui_app.onFailure)
}

module.exports = {onCreateTraining, onUpdateTraining, onDeleteTraining, onIndexTraining, onSearchTraining};
