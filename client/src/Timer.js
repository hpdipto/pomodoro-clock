import React from 'react';

function Timer({title, timerMinute, timerSecond, onReset, onStartStop}) {

  return (
    <div>
      <div id="timer-label">{title}</div>
      <div id="time-left">{formatForLeadingZero(timerMinute)}:{formatForLeadingZero(timerSecond)}</div>
      <button type="button" id="start_stop" onClick={onStartStop}>StartStop</button>
      <button type="button" id="reset" onClick={onReset}>Reset</button>
      <audio id="beep"preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"/>
    </div>
  );
}

export default Timer;