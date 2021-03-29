import { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { PersonsTable } from "./TeamsTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      date: new Date().toString()
    }
    console.warn('props', props);
  }

  componentDidMount() {

    setInterval(() => {
      this.setState({
        date: new Date().toString()
      })
    }, 60000);

    this.loadList();
  }

  loadList() {

  }

  add(person) {
    fetch("http://localhost:3000/teams-json/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(person)
    })
      .then(res => res.json())
      .then(r => {
        console.warn(r);
        if (r.success) {
          this.loadList();
        }
      });
  }

  render() {
    return (
      <div>
        <h1>Teams Networking</h1>
        <div>Search</div>
        <PersonsTable persons={this.props.persons} border={1} onSubmit={
          person => {
            this.add(person);
          }
        } />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.info('map state to props', state);
  return {
    persons: state.persons
  }
};

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;