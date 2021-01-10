const store = require('./store.js')

const onCreateTraining = function (gameResponse) {
  //store.game = gameResponse.game
  $('.top_bar h2').html("Post API High")
}

const onIndexTraining = function () {
  $('.top_bar h2').html("Post API Satin Panties")
}

module.exports = {onCreateTraining, onIndexTraining};
