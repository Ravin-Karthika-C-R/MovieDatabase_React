import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SingleView from './pages/SingleView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/view/:id' element={<SingleView></SingleView>}></Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
