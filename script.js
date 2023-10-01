//getting our clock in a variable
const clock = document.getElementById("clock");  

var min = 0;
var sec = 0;
var milisec = 0;

//initially clock is stoped hence it is true
var stopClock = true; 

// start button function
function startButton(){
    if(stopClock == true){
        stopClock = false;
        timer();
    }
}

// stop button function
function stopButton(){
    if(stopClock == false){
        stopClock = true;
    }
    else{
        alert("Clock is already stopped!");
    }
}

// reset button function
function resetButton(){
    clock.innerHTML = "00:00:00";
    stopClock = true;
    min = 0;
    sec = 0;
    milisec = 0;
}

// this is the main function which is used for working of our stopwatch
function timer(){
    if(stopClock == false){
        sec = parseInt(sec);
        min = parseInt(min);
        milisec = parseInt(milisec);

        milisec = milisec+1;

        if(milisec == 100){
            sec = sec + 1;
            milisec = 0;
        }

        if(sec == 60){
            min = min + 1;
            sec = 0;
        }

        //if variable is in single digit then append 0 in front of it 
        if(milisec < 10){
            milisec = "0" + milisec;
        }
        if(sec < 10){
            sec = "0" + sec;
        }
        if(min < 10){
            min = "0" + min;
        }
        
        // end case condition when user forgots to stop the timer
        if(min == 100){
            alert("Timer Over! Now its going to restart.");
            return resetButton();
        }
    
        clock.innerHTML = min + ":" + sec + ":" + milisec;
        setTimeout("timer()", 10);
    }
}