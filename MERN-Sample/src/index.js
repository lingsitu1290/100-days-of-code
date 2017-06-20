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
