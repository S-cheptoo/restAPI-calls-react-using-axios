import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';

function App() {
  return (
    <div className="App">
      <div>
        <h2>React Crud Operations</h2>
      </div>
      <div>
        <Create />
      </div>
      <br/>
      <div className='table'>
        <Read/>
      </div>
    </div>
  );
}

export default App;
