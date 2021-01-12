const store = require('./store.js')

// User
const onRegisterUser = function () {
  $('#registerModalLabel').text('Signed Up Successfully!')
  $('form').trigger('reset')
}

const onSignInUser = function (response) {
  store.user = response.user
  $('form').trigger('reset')

  if (response) {
    $('.auth').show()
    $('.unauth').hide()
    $('.close').trigger('click')
    $('form').trigger('reset')
    $('.top_bar h2').text("Hey " + store.user.username + "!")
    console.log(store);
  }
}

const onSignOutUser = function () {
  store.user = null
  $('.unauth').show()
  $('.auth').hide()
}

const onChangePass = function (response) {
  $('#changePassModalLabel').text('Password Changed Successfully!')
  $('form').trigger('reset')
}

const onFailure = function () {
  $('.top_bar h2').text("Hey, if you see this, something broke in a very bizarre way. You are most likely no longer connected to the internet or the site host is down.");
}

const onRegisterFailure = function () {
  $('#registerModalLabel').text('This account already exists.')
  $('form').trigger('reset')
}

const onPassChangeFailure = function () {
  $('#changePassModalLabel').text('Wrong Password, Cowboy.')
  $('form').trigger('reset')
}

const onLogInFailure = function () {
  $('#loginModalLabel').text('Bad Credentials, Baby.')
  $('form').trigger('reset')
}

module.exports = {onRegisterUser, onSignInUser, onSignOutUser, onFailure, onChangePass, onLogInFailure, onRegisterFailure, onPassChangeFailure}
