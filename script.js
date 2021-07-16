function addtask() {
    console.log("the button is clicked");
    // grab user input from #userInput => e.g. Take out trash
    const userInput = document.getElementById('taskInput');
    const userInputValue = document.getElementById('taskInput').value;
    // create a list item element => <li></li>
    var createLI = document.createElement('li');
    // add user input to li  => <li>Take out trash</li>
        createLI.innerText = userInputValue;
    // .innertext change to innerhtml
    // add lste item to .TodoList <ul class="TodoList">  <li>Take out trash</li> </ul>
    var liList = document.getElementById("taskList");
    liList.appendChild(createLI);
        userInput.value = "";
}
const pomoTimerDiv = document.querySelector('#Timer');  
const startButton = document.querySelector('#pomo-start'); 
const pauseButton = document.querySelector('#pomo-pause'); 
const stopButton = document.querySelector('#pomo-stop');  
const timerText = pomoTimerDiv.querySelector("h1");
let isClockRunning = truefalse;

startButton.addEventListener('click', () => {
    // toggleClock();
    startTimer();
})
pauseButton.addEventListener('click', () => {
    // toggleClock();
    isClockRunning = !isClockRunning;
})
stopButton.addEventListener('click', () => {
    // toggleClock(true);
    clearInterval(pomoTimer);
})
    


let workSession = 1500;
let currentTimeLeft = 1500;
let breakSession = 600;
let currentTimeLeftInSession = 1500;
let pomoTimer;

const toggleClock = (reset) => {
if (reset) {
      // STOP TIMER
    } else {
if (isClockRunning === true) {
        // PAUSE TIMER
        clearInterval(pomoTimer);
        isClockRunning = false;
    } else {
        // START TIMER
    isClockRunning = true;
    pomoTimer = setInterval(() => {
        // decrease time left / increase time spent
        currentTimeLeftInSession--;
         1000})
    pomoTimer = setInterval(() => {
            currentTimeLeftInSession--;
            displayCurrentTimeLeftInSession();
          }, 1000);
        }
        
 }
  }
  const displayCurrentTimeLeftInSession = () => {
    const secondsLeft = currentTimeLeftInSession;
    let result = '';
    const seconds = secondsLeft % 60;
    const minutes = parseInt(secondsLeft / 60) % 60;
    let hours = parseInt(secondsLeft / 3600);
    // add leading zeroes if it's less than 10
    function addLeadingZeroes(time) {
      return time < 10 ? `0${time}` : time
    }
    if (hours > 0) result += `${hours}:`
      result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`
      pomoTimer.innerText = result.toString();
  }
  function runTime() {
    //   console.log(timer);
    const timer = document.querySelector("#timer").innerText;
    if (timer !== "0:00") {
      var timeInSecond = convertToSeconds('#timer'); // 10
      timeInSecond--; // 9
      var newTime = convertBackToString(timeInSecond);
      // console.log(newTime);
      document.querySelector("#timer").innerText = newTime;
      setTimeout(runTime, 1000); }
  }
  function convertToSeconds(timer) {
    // separate the string value by the colon
    var splitTimer = timer.split(":"); // ["00", "10"]  return Number(splitTimer[0]) * 60 + Number(splitTimer[1]);
  }
  function convertBackToString(timeInSecond) {
    // convert divide by 60 = 14.
    var minutes = Math.floor(timeInSecond / 60); // 0
    // take the remainder (modulo) = 38.
    var seconds = timeInSecond % 60; // 9
    if (seconds < 10) {
      seconds = "0" + seconds;
      console.log(seconds);
    }
    // tack them together with a colon (:)
    var timeString = minutes + ":" + seconds; // 0:09
    // and display that
    return timeString;
   }
   function turnOn() {
    if(!isClockRunning){
        isClockRunning = true;
        runTime();
    }
}
let minutes = 25;
let seconds= 0;
const startTimer = () => {
  pomoTimer = setInterval(() => {
    if (isClockRunning) {
      seconds--;
      if (seconds < 0) {
        minutes--;
        seconds = 59;
      }
      timerText.innerHTML = minutes + ":" + ("0" + seconds).slice(-2);
      if (minutes <= 0 && seconds <= 0) {
      
      }
    }
        
    
  }, 1000);
};
