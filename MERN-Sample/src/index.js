import React from "react";
import ReactDOM from 'react-dom';

import App from './components/App';
import data from './testData';

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
  <App contests={data.contests}/>,
  document.getElementById('root')
);

/* Force the unmounting of app component*/
setTimeout(() => {
  ReactDOM.render(
    <h2> After app unmount </h2>,
    document.getElementById('root')
  );
}, 4000);
