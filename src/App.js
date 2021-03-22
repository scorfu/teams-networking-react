import { Component } from 'react';
import './App.css';
import { TeamsTable } from "./TeamsTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    }
  }
  
componentDidMount() {
  console.warn('mount');
  setTimeout(() => {
    this.setState({
      teams: [
        {
          "name": "test",
          "members": "test test",
          "url": "https://github.com/scorfu/scorfu.github.io"
        },
        {
          "name": "teams-networking",
          "members": "test1 test1",
          "url": "https://github.com/scorfu"
        }
      ]
    })
    console.warn('loaded')
  }, 2000);
}

  render() {
    console.debug(this.state.teams)
    return (
      <div>
        <h1>Teams Networking</h1>
        <div>Search</div>
        <TeamsTable teams={this.state.teams} border={1} />
      </div>
    );
  }
}

export default App;