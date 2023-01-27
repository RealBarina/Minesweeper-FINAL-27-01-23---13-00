'use strict'

// A function which starts the game timer
function startTimer() {
  var startTime = Date.now()
  gTimerInterval = setInterval(function () {
    var elapsedTime = Date.now() - startTime
    var secsPassed = (elapsedTime / 1000).toFixed(3)
    gGame.secsPassed = secsPassed
    document.querySelector('.timer').innerHTML = secsPassed
  }, 50)
}

// A function which stops the game timer
function stopTimer() {
  clearInterval(gTimerInterval)
}

// A function which stops and resets the game timer
function resetTimer() {
  stopTimer()

  var elTimerDiv = document.querySelector('.timer')
  elTimerDiv.innerHTML = 'Timer'
}