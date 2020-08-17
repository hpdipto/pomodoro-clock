import React from 'react';

function Session({sessionLength, onDecrement, onIncrement}) {

  return (
    <div>
      <div id="session-label">Session Length</div>
      <button type="button" id="session-decrement" onClick={onDecrement}>-</button>
      <div id="session-length">{sessionLength}</div>
      <button type="button" id="session-increment" onClick={onIncrement}>+</button>
    </div>
  );
}

export default Session;