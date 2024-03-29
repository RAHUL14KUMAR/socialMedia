import logo from './logo.svg';
import './App.css';
import Auth from './Pages/Auth'
import Home from './Pages/Home'
import Chat from './Pages/Chat/Chat'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Auth/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
