import './App.css';
import { getDays } from './Components/getdays';

function App() {

  let Days = getDays

  return (
    <div className="App">
      <header className="App-header">
        <p>Helmchen:</p>
        <div>seit {Days()} Tagen.</div>
      </header>
    </div>
  );
}

export default App;
