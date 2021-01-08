const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../lib/get-form-fields.js')
const gameLogic = require('./gameLogic')


// User Events
const onRegisterUser = function (event) {
  event.preventDefault();

  const form = event.target
  const formData = getFormFields(form)

  console.log(formData);

  api.signup(formData)
  .then(ui.onRegisterUser)
  .catch(ui.onRegisterFailure)
}

const onRegisterClick = function (event) {
  $('#registerModalLabel').text('Register Below.')
}

const onSignInUser = function (event) {
  event.preventDefault();
  $('#loginModalLabel').text('Log In Below.')

  const form = event.target
  const formData = getFormFields(form)

  api.signin(formData)
  .then(ui.onSignInUser)
  .catch(ui.onLogInFailure)
}

const onSignOutUser = function (event) {
  event.preventDefault()

  gameLogic.cleanPage()

  api.signout()
  .then(ui.onSignOutUser)
  .catch(ui.onFailure)
}

const onChangePass = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changepass(data)
  .then(ui.onChangePass)
  .catch(ui.onPassChangeFailure)
}

const onChangePassClick = function (event) {
  $('#changePassModalLabel').text('Change Password Below.')
}

const onViewTrainings = function (event) {
  event.preventDefault()

  api.viewgames()
  .then(ui.onViewGames)
  .catch(ui.onFailure)
}

module.exports = {
  onRegisterUser,
  onSignInUser,
  onSignOutUser,
  onChangePass,
  onViewTrainings,
  onRegisterClick,
  onChangePassClick
};
