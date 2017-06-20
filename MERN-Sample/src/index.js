import React from "react";
import ReactDOM from 'react-dom';

const Header = ({ message }) => {
  return (
    <h2 className="Header text-center">
      {message}
    </h2>
  );
};

Header.propTypes = {
  message: React.PropTypes.string
};

const App = () => {
  return (
    <div className="App">
      <Header message="Naming Contests"/>
      <div>
        ...
      </div>
    </div>
  );
};

// /* Prop type validation*/
// App.propTypes = {
//   headerMessage: React.PropTypes.string.isRequired
// };
//
// /* Set prop value to a default value */
// App.defaultProps = {
//   headerMessage: "Hello!!"
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
