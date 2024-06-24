import React from 'react';

const PinPad = () => {
  return (
    <div>
      <div className="pin-pad">
        <div className="display">****</div>
        <div className="buttons">
          <button className="btn number">7</button>
          <button className="btn number">8</button>
          <button className="btn number">9</button>
          <button className="btn number">4</button>
          <button className="btn number">5</button>
          <button className="btn number">6</button>
          <button className="btn number">1</button>
          <button className="btn number">2</button>
          <button className="btn number">3</button>
          <button className="btn clear">Clear</button>
          <button className="btn enter">Enter</button>
        </div>
      </div>
    </div>
  );
}

export default PinPad;