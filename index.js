const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;
let timeLeft = 30; 
let timerInterval; 


function updateTimer() {
  document.getElementById("time").textContent = timeLeft;
}


function startTimer() {
  timerInterval = setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
    } 
    
    
    else {
      clearInterval(timerInterval); 
      document.getElementById("guessField").disabled = true;
      document.getElementById("submitButton").disabled = true; 
      alert("Time's up! You didn't guess the number in time.");
    }
  }, 1000); 
}

startTimer();

document.getElementById("submitButton").onclick = function () {
  let guess = document.getElementById("guessField").value;
  guesses += 1;

  if (guess == answer) {
    clearInterval(timerInterval); 
    alert(`${answer} is the #. It took you ${guesses} guesses in ${30 - timeLeft} seconds.`);
    document.getElementById("guessField").disabled = true;
    document.getElementById("submitButton").disabled = true; 
  } 
  else if (guess < answer) {
    alert("Too small!");
  }
   else {
    alert("Too Large!");
  }
};


