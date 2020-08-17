import React from 'react';

function Break({breakLength, onDecrement, onIncrement}) {

  return (
    <div className="card text-center">
      <div className="card-body">
        <div className="row">
          <div className="col">
              <div id="break-length"><h3 style={{fontFamily: "Orbitron"}}>{breakLength}</h3></div>
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

      <div className="card-footer"><h6>Break Length</h6></div>
    </div>
  );
}

export default Break;