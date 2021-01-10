const api = require('./api')
const ui_user = require('./userUi')
const getFormFields = require('./../../lib/get-form-fields.js')


// User Events
const onRegisterUser = function (event) {
  event.preventDefault();

  const form = event.target
  const formData = getFormFields(form)

  console.log(formData);

  api.signup(formData)
  .then(ui_user.onRegisterUser)
  .catch(ui_user.onRegisterFailure)
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
  .then(ui_user.onSignInUser)
  .catch(ui_user.onLogInFailure)
}

const onSignOutUser = function (event) {
  event.preventDefault()

  api.signout()
  .then(ui_user.onSignOutUser)
  .catch(ui_user.onFailure)
}

const onChangePass = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changepass(data)
  .then(ui_user.onChangePass)
  .catch(ui_user.onPassChangeFailure)
}

const onChangePassClick = function (event) {
  $('#changePassModalLabel').text('Change Password Below.')
}

module.exports = {
  onRegisterUser,
  onSignInUser,
  onSignOutUser,
  onChangePass,
  onRegisterClick,
  onChangePassClick
};
