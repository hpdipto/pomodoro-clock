import React from 'react';

function Session({sessionLength, onDecrement, onIncrement}) {

  return (
    <div className="card text-center">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <div id="session-length"><h3 style={{fontFamily: "orbitron"}}>{sessionLength}</h3></div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-outline-secondary" onClick={onDecrement}><i class="fa fa-arrow-down" aria-hidden="true"></i></button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-secondary" onClick={onIncrement}><i class="fa fa-arrow-up" aria-hidden="true"></i></button>
          </div>

        </div>
      </div>

      <div className="card-footer"><h6 style={{fontFamily: "Roboto Slab"}}>Session Length</h6></div>
    </div>
  );
}

export default Session;