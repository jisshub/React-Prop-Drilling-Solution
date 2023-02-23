import logo from './logo.svg';
import './App.css';
import Parent from './components/WithoutUseContext';
import ParentContext from './components/WithUseContext';

function App() {
  return (
    <div className="App">
      {/* <Parent /> */}
      <ParentContext />
    </div>
  );
}

export default App;
