import logo from './logo.svg';
import './App.css';
import Auth from './Pages/Auth'
import Home from './Pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/'  element={<Auth/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;