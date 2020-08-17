import React, { useState, useEffect } from 'react';
import './App.css';

import Break from './Break';
import Session from './Session';
import Timer from './Timer';



const App = () => {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const [timerState, setTimerState] = useState(false);

  const [breakTime, setBreakTime] = useState(5 * 60);
  const [sessionTime, setSessionTime] = useState(25 * 60);

  const [beepAudio, setBeepAudio] = useState(false);


  const reset = () => {
    setBreakLength(5);
    setSessionLength(25);

    setTimerState(false);

    setBreakTime(5*60);
    setSessionTime(25*60);

    var audio = document.getElementById('beep');
    audio.pause();
    audio.currentTime = 0;
  }

  const breakDecrement = () => {
    var bd = breakLength - 1;
    if(bd !== 0) {
        setBreakLength(bd);
        setBreakTime(bd * 60);
    }
  }

  const breakIncrement = () => {
    var ib = breakLength + 1;
    if(ib <= 60) {
        setBreakLength(ib);
        setBreakTime(ib * 60);
    }
  }

  const sessionDecrement = () => {
    var sd = sessionLength - 1;
    if(sd !== 0) {
        setSessionLength(sd);
        setSessionTime(sd * 60);
    }
  }

  const sessionIncrement = () => {
    var si = sessionLength + 1;
    if(si <= 60) {
        setSessionLength(si);
        setSessionTime(si * 60);
    }
  }

  const startStop = () => {
    timerState ? setTimerState(false) : setTimerState(true);
  }

  
  // useEffect is the necessary hook to calculate time
  useEffect(() => {
    // this two lines are most important line in this program
    const sessionSeconds = timerState && (sessionTime > -1) && setInterval(() => setSessionTime(sessionTime-1), 1000);
    const breakSeconds = timerState && (sessionTime < 0) && breakTime && setInterval(() => setBreakTime(breakTime-1), 1000);

    // if both sessionTime and breakTime finish, restart the clock
    if((sessionTime <= 0) && (breakTime <= 0)) {
        setSessionTime(sessionLength * 60);
        setBreakTime(breakLength * 60);
    }

    // beeping the audio if sessionTime or breakTime ends
    if((sessionTime <= 0 && !beepAudio) || (breakTime <= 0 && beepAudio)) {
        beepAudio ? setBeepAudio(false) : setBeepAudio(true);
        var audio = document.getElementById('beep');
        audio.play();
    }

    return (() => {
        clearInterval(sessionSeconds);
        clearInterval(breakSeconds);
    });
  }, [timerState, sessionTime, breakTime, beepAudio, sessionLength, breakLength]);



  return (
    <div>
      <Break breakLength={breakLength} onDecrement={breakDecrement} onIncrement={breakIncrement}/>
      <br />
      <Session sessionLength={sessionLength} onDecrement={sessionDecrement} onIncrement={sessionIncrement}/>
      <br />
      {(sessionTime >= 0) ? 
        <Timer title={"Session"} timerMinute={Math.floor(sessionTime/60)} timerSecond={sessionTime%60} onReset={reset} onStartStop={startStop}/>
        :
        <Timer title={"Break"} timerMinute={Math.floor(breakTime/60)} timerSecond={breakTime%60} onReset={reset} onStartStop={startStop}/>
      }
      
    </div>
  );
}


export default App;
