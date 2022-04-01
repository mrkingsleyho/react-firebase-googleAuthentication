import React from 'react'
// instances/ export variables we created and importing them from firebase-config.js
import { auth, provider} from '../firebase-config';
//built-in function from firebase's popup feature - https://firebase.google.com/docs/auth/web/google-signin?authuser=0&hl=en
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login({setIsAuth}) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/');
    });
  };


  return (
    <div className='loginPage'>
      <p>Sign In With Google to Continue</p>
      <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign in With Google</button>
    </div>
  )
}

export default Login