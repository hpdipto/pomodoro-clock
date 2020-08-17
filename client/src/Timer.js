import React from 'react';

const formatForLeadingZero = (number) => {
  if(number < 10) {
    return "0"+number.toString();
  }
  return number;
}



function Timer({title, timerMinute, timerSecond, onReset, onStartStop, timerState}) {

  return (
    <div className="card text-center">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <div id="time-left">
              <h3 style={{fontFamily: "orbitron"}}>{formatForLeadingZero(timerMinute)}:{formatForLeadingZero(timerSecond)}</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            {timerState ?
              <button type="button" className="btn btn-outline-secondary" onClick={onStartStop}><i class="fa fa-stop" aria-hidden="true"></i> Stop</button>
                :
              <button type="button" className="btn btn-outline-secondary" onClick={onStartStop}><i class="fa fa-play" aria-hidden="true"></i> Start</button>
            }
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-secondary" onClick={onReset}><i class="fa fa-repeat" aria-hidden="true"></i> Reset</button>
          </div>
        </div>

        <audio id="beep"preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"/>
      </div>

      <div className="card-footer"><h6 style={{fontFamily: "Roboto Slab"}}>{title}</h6></div>
    </div>
  );
}

export default Timer;