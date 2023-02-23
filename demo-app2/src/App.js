import logo from './logo.svg';
import './App.css';
import FootballTeams from './components/WithoutContext';
import FootballTeamsContext from './components/WithContext';

function App() {
  return (
    <div className="App">
      {/* <FootballTeams /> */}
      <FootballTeamsContext />
    </div>
  );
}

export default App;
