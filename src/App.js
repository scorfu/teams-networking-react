import './App.css';
import { TeamsTable } from "./TeamsTable";

let teams = [
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
];

function App() {
  return (
    <div>
      <h1>Teams Networking</h1>
      <div>Search</div>
      <TeamsTable teams={teams} border={1} />
    </div>
  );
}

export default App;