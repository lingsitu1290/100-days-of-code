import React from "react";
import Header from "./Header"

// const App = () => {
//   return (
//     <div className="App">
//       <Header message="Naming Contests"/>
//       <div>
//         ...
//       </div>
//     </div>
//   );
// };

// Change to react class to introduce state or life cycle of the component
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { test: 42 };
  // }
  state = {
    pageHeader: 'Naming Contests'
  };

  componentDidMount(){
    console.log("did Mount");
    debugger;
  }

  componentWillUnmount(){
    console.log("will Unmount");
    debugger;
  }

  render(){
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          // {this.state.test}
          ...
        </div>
      </div>
    );
  }
}

export default App;
