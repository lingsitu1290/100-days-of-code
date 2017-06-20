import React from "react";
import ReactDOM from 'react-dom';

const color = Math.random() > 0.5 ? 'green' : 'red';

const App = () => {
  return (
    <h2 style={{color:color}}>
      Hello React with JSX!! -- {Math.random()}
    </h2>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
