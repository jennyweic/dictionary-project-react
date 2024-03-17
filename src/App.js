import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <a href="#" className="btn btn-primary">
            Hello
          </a>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Jennifer </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
