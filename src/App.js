import { Component } from 'react';
import './App.css';
import { PersonsTable } from "./TeamsTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      date: new Date().toString()
    }
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
    fetch("http://localhost:3000/teams-json")
      .then(res => res.json())
      .then(persons => {
        this.setState({
          persons
        });

      });
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
        <PersonsTable persons={this.state.persons} border={1} onSubmit={
          person => {
            this.add(person);
          }
        } />
      </div>
    );
  }
}

export default App;