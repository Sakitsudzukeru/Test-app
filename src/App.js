

import SearchNotes from "./Components/SearchNotes";
import './App.css';
import MyItemNotes from "./Components/MyItemNotes";
import NewNotes from "./Components/NewNotes";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <SearchNotes/>
<MyItemNotes/>    

      </header>
    </div>
  );
}

export default App;
