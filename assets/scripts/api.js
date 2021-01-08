const config = require('./config.js')
const store = require('./store.js')

// User API
const signup = function (formData) {

  return $.ajax({
    url: config.apiUrl + '/sign-up/',
    method: 'POST',
    data: formData
  })
}

const signin = function (formData) {

  return $.ajax({
    url: config.apiUrl + '/sign-in/',
    method: 'POST',
    data: formData
  })
}

const signout = function () {

  $('.auth').hide()
  $('.unauth').show()

  return $.ajax({
    url: config.apiUrl + '/sign-out/',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const changepass = function (formData) {

  return $.ajax({
    url: config.apiUrl + '/change-pass/',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// App API

const viewtrainings = function () {
  return $.ajax({
    url: config.apiUrl + '/training',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createtraining = function () {

  return $.ajax({
    url: config.apiUrl + '/training/',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      training: {
          name: store.training.name,
          type: store.training.type,
          difficulty: store.training.difficulty
      }
  })
}

const updatetraining = function () {

  return $.ajax({
    url: config.apiUrl + '/training/' + store.training._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      training: {
          name: store.training.name,
          type: store.training.type,
          difficulty: store.training.difficulty
      }
    }
  })
}

module.exports = {
  signup,
  signin,
  signout,
  changepass,
  viewtrainings,
  createtraining,
  updatetraining
};
