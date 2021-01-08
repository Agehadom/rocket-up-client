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
    $('.welcomeMessage h1').text("Hey " + store.user.email + "!")
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
  $('.game_container p').text("Hey, if you see this, something broke in a very bizarre way. You are most likely no longer connected to the internet or the site host is down.");
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

const createTraining = function (gameResponse) {
  store.game = gameResponse.game
  $('.actualPlayButton h1').text("Replay")
  $('.button_container').hide()
}

const onViewTrainings = function (gameResponse) {
  $('.welcomeMessage p').html(store.user.email + " has played " + gameResponse.games.length + " games!")
}

// Game API UI

module.exports = {onRegisterUser, onSignInUser, onSignOutUser, onFailure, createTraining, onChangePass, onViewTrainings, onLogInFailure, onRegisterFailure, onPassChangeFailure}
