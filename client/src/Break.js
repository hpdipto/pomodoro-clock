import React from 'react';

function Break({breakLength, onDecrement, onIncrement}) {

  return (
    <div>
      <div id="break-label">Break Length</div>
      <button type="button" id="break-decrement" onClick={onDecrement}>-</button>
      <div id="break-length">{breakLength}</div>
      <button type="button" id="break-increment" onClick={onIncrement}>+</button>
    </div>
  );
}

export default Break;