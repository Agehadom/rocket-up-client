const config = require('./config.js')
const store = require('./store.js')
const getFormFields = require('./../../lib/get-form-fields.js')


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

const createtraining = function (formData) {

  return $.ajax({
    url: config.apiUrl + '/training/',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

const updatetraining = function (formData) {

  return $.ajax({
    url: config.apiUrl + '/training/' + formData.training._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      training: {
          name: store.training.name,
          type: store.training.type,
          difficulty: store.training.difficulty
      },
    },
  })
}

const deletetraining = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/training/' + formData.training._id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

const viewtraining = function () {
  return $.ajax({
    url: config.apiUrl + '/training/',
    method: 'GET'
    // headers: {
    //   Authorization: 'Bearer ' + store.user.token
    // }
  })
}

const searchtraining = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/training/' + formData.training._id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  signup,
  signin,
  signout,
  changepass,
  createtraining,
  updatetraining,
  deletetraining,
  viewtraining,
  searchtraining
};
