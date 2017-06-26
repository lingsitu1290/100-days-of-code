import React from "react";
import Header from "./Header";
import ContestPreview from "./ContestPreview";
import data from "../testData";
import axios from "axios";

// Change to react class to introduce state or life cycle of the component
class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: []
  };

  componentDidMount(){
    axios.get('/api/contests')
      .then(resp => {
        this.setState({
          contests: resp.data.contests
        });
      })
      .catch(console.error);
  }

  componentWillUnmount(){
    console.log("will Unmount");
    // debugger;
  }

  render(){
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest =>
              <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
