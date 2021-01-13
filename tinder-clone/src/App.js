import './App.css';
import Header from "./Header";
import TinderCards from './TinderCards';

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <Header/>
      <TinderCards/>
      {/* Swipebuttons*/}
    </div>
  );
}

export default App;
