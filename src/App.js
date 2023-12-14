
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Todohomepage from'./components/Todohomepage'
import Delete from './components/Delete';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Todohomepage/>}/>
      <Route path='delete'element={<Delete/>}/>
    </Routes>
    </BrowserRouter>
      
  );
}

export default App;
