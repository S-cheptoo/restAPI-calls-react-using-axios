import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Update from './Components/Update';
import Delete from './Components/Delete';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <h2>React Crud Operations</h2>
        </div>
        <Routes>
          <Route exact path='/' element={<Create/>}/>
          <Route path='/read' exact element={<Read/>}/>
          <Route path='/update' exact element={<Update/>}/>
          <Route path='/delete' exact element={<Delete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
