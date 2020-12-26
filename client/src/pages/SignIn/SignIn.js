import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignInAc } from '@redux/actionCreators/authAC';

export function SignIn() {
  const dispatch = useDispatch();
  const { tokens } = useSelector(store => store);

  const formHandler = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(fetchSignInAc(user));
  };

  return (
    <>
      {localStorage.setItem('auth', JSON.stringify(tokens))}
      {tokens.success ? <Redirect to='/' /> : null}
      <div className='card'>
        <div className='card-body'>
          <form onSubmit={formHandler}>
            <div className='mb-3'>
              <label htmlFor='email'>Email</label>
              <input className='form-control' type='email' id='email' name='email' placeholder='Email' required />
            </div>
            <div className='mb-3'>
              <label htmlFor='password'>Password</label>
              <input className='form-control' type='password' id='password' name='password' placeholder='Password'
                     required />
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </form>
        </div>
      </div>
      <Link to='signup'>
        <div className='w-100 text-center m-2'>
          Dont't have account? Sign un
        </div>
      </Link>
    </>
  );
}