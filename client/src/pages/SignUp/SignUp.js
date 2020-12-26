import React, { useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignUpAC } from '@redux/actionCreators/authAC';

export function SignUp() {
  const dispatch = useDispatch();
  const { tokens } = useSelector(store => store);

  const validatePassword = (password, confirmPassword) => {
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity(`Passwords Don't Match`);
      return false;
    } else {
      confirmPassword.setCustomValidity('');
      return true;
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = event.target;
    const isSame = validatePassword(password, confirmPassword);
    if (isSame) {
      const user = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      };
      dispatch(fetchSignUpAC(user));
    }
  };

  return (
    <>
      {tokens.success ? <Redirect to='/' /> : null}
      <div className='card'>
        <div className='card-body'>
          <form onSubmit={formHandler}>
            <div className='mb-3'>
              <label htmlFor='firstName'>First name</label>
              <input className='form-control' type='text' id='firstName' name='firstName' placeholder='First name'
                     required />
            </div>
            <div className='mb-3'>
              <label htmlFor='lastName'>Last name</label>
              <input className='form-control' type='text' id='lastName' name='lastName' placeholder='Last name'
                     required />
            </div>
            <div className='mb-3'>
              <label htmlFor='email'>Email</label>
              <input className='form-control' type='email' id='email' name='email' placeholder='Email' required />
            </div>
            <div className='mb-3'>
              <label htmlFor='password'>Password</label>
              <input className='form-control' type='password' id='password' name='password' placeholder='Password'
                     required />
            </div>
            <div className='mb-3'>
              <label htmlFor='confirmPassword'>Confirm password</label>
              <input className='form-control' type='password' id='confirmPassword' name='confirmPassword'
                     placeholder='Confirm password'
                     required />
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </form>
        </div>
      </div>
      <Link to='signin'>
        <div className='w-100 text-center m-2'>
          Already have account? Sign in
        </div>
      </Link>
    </>
  );
}