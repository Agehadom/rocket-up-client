const store = require('./store.js')
//const break = ('\n')

const onCreateTraining = function () {
  $('.top_bar h2').html("Post API High")
  $('#createTrainingModalLabel').text("Training has been added to the database!")
}

const onIndexTraining = function (res) {
  const trainingListing = res.trainings
  console.log(trainingListing)

  //const trainingTXT = JSON.stringify(res.trainings[0].name)
  trainingListing.forEach(training => {
    console.log(training)
    $('.indexBody p').append("Name: " + training.name + "<br>")
    $('.indexBody p').append("Type: " + training.type + "<br>")
    $('.indexBody p').append("Difficulty: " + training.difficulty + "<br>")
    $('.indexBody p').append("Code: " + training.code + "<br>")
  })

  //$('.indexBody p').html(trainingTXT)
}

const onDeleteTraining = function (res) {
  //const trainingListing = res.trainings
  console.log("Made it the APP");
  console.log(store);
  $('.top_bar h2').text("POST API Northern Lights");
  $('#deleteTrainingModalLabel').html("Training Bombed!")
}

const onSearchTraining = function (res) {
  //const trainingListing = res.trainings
  console.log("Search made it to the app");
  console.log(store);
}

const onFailure = function () {
  $('.top_bar h2').text("BORKED");
}

module.exports = {onCreateTraining, onIndexTraining, onDeleteTraining, onSearchTraining, onFailure};
