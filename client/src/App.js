import { useQuery } from "@apollo/client";
import { getEmployees } from "./gql/employee/queries";
import "./App.css";

function App() {
  const { loading, data, error } = useQuery(getEmployees);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
