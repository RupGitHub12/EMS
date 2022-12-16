import React, {useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom'
import isError from '../components/login-validation/error'
import ValidateLogin from '../components/login-validation/validatelogin'

const Login = () =>{
  
  const [email, setEmail] = useState('');
  const [psw, setPsw] = useState('');
  const [error, setError] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [invalid, setInvalid] = useState(false)

  const token = localStorage.getItem('token');

  useEffect(() => {
    //console.log(token);
    if(token != null){
      setIsLoggedIn(true)
    }
  }, [token]);
    
    

  const handleLogin = (e) => {
    e.preventDefault();
    setError(isError(email, psw));
    //console.log(Object.keys(isError(email, psw)).length)
    if(Object.keys(isError(email, psw)).length >0){
      //console.log('error');
    }
    else{
      //console.log('no error!')
      if(ValidateLogin(email,psw)){
        localStorage.setItem('token', email);
        setIsLoggedIn(true);
      }
      else{
        setInvalid(true);
      }
    }
  };

  if(isLoggedIn){
    return <Navigate to = '/'/>
  }


  return (
    <>
      <div className='form' onSubmit={handleLogin}>
        <p> Id: test@gmail.com PASSWORD: Test@123 </p>
        <h2 className='title'>Log into EMS</h2>
        <form>
          <div className='form-control'>
            <label htmlFor='email'>EMAIL</label>
            <input
              type = 'email'
              id = 'email'
              placeholder = 'Enter Username'
              onChange = {(e) => setEmail(e.target.value)}
            />
            {error.email && <p className='danger' >{error.email}</p>}
          </div>
          <div className='form-control'>
            <label htmlFor='password'>PASSWORD </label>
            <input
              type = 'password'
              id = 'password'
              placeholder= 'Enter Password'
              onChange = {(e) => setPsw(e.target.value)}
            />
            {error.psw && <p className='danger'>{error.psw}</p>}
            {invalid && <p className='danger'>Invalid Id Pw</p>}
          </div>
          <button type='submit' className='submit-btn'>Log In</button>
        </form>
      </div>
    </>
  );

};

export default Login;