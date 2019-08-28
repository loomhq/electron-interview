import React from 'react';
import ReactDOM from 'react-dom';

const onClick = () => {};

const First = () => {
  return (
    <div className="content">
      <h1>Welcome</h1>
      <h1>👋</h1>
      <p>Thanks for spending time with us! Lets get this started</p>
      <button onClick={onClick}>CLICK ME!</button>
    </div>
  );
};

ReactDOM.render(<First />, document.querySelector('#app'));
