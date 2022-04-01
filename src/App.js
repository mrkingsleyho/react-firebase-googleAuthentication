import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Routes/Home';
import Login from './Routes/Login';
import CreatePost from './Routes/CreatePost';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/Login';
    })
  }

  return (
    <Router>
    <nav>
      <Link to='/'> Home </Link>
      {/* If we are not authenticated, show Login link. If authenticated, show Log out button and Create Post */}
      {!isAuth ? (<Link to='/Login'> Login </Link>) : (
      <>
      <button onClick={signUserOut}> Log out </button>
      <Link to='/createPost'> Create Post </Link>
      </>
      )}  
    </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}/>} />
        <Route path='/Login' element={<Login setIsAuth={setIsAuth} />}/>
        <Route path='/CreatePost' element={<CreatePost isAuth={isAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
