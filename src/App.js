import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import Header from './Home/Header/Header';
import Home from './Home/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<SignIn></SignIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
