import React from "react";
import ReactDOM from 'react-dom';

import App from './components/App'
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

/* Force the unmounting of app component*/
setTimeout(() => {
  ReactDOM.render(
    <h2> After app unmount </h2>,
    document.getElementById('root')
  );
}, 4000);
