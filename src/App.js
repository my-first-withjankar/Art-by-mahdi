import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import CheckOut from './components/CheckOut/CheckOut';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
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
        <Route path='checkout' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<SignIn></SignIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
