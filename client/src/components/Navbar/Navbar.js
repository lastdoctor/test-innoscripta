import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function Navbar(props) {
  const [currency, setCurrency] = useState('USD');
  const tokens = JSON.parse(localStorage.getItem('auth'));
  const pizza = JSON.parse(localStorage.getItem('pizza'));
  const { pizzas } = useSelector(store => store.card);
  const quantity = pizzas ? pizzas.order.reduce((accum, el) => accum + el.quantity, 0) : [];

  const ClickHandler = (event) => {
    const selectedCurrency = event.target.textContent;
    pizza.currency = selectedCurrency;
    localStorage.setItem('pizza', JSON.stringify(pizza));
    setCurrency(selectedCurrency);
  };

  return (
    <>
      <nav className='navbar navbar-light bg-light fixed-top'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>Awesome 3.14zza</Link>
          <div className='d-flex'>
            <div>
              {
                tokens.success
                  ?
                  <Link to='/profile'>
                    <button className='btn btn-warning'>Profile</button>
                  </Link>
                  :
                  <Link to='/signin'>
                    <button className='btn btn-warning'>Login</button>
                  </Link>
              }
            </div>
            <div className='btn-group'>
              <button type='button' className='btn btn-warning dropdown-toggle' data-bs-toggle='dropdown'
                      aria-expanded='false'>
                {currency === 'USD' ? 'USD' : 'EURO'}
              </button>
              <ul className='dropdown-menu'>
                <li onClick={ClickHandler}>
                  <a className='dropdown-item'>
                    {currency === 'USD' ? 'EURO' : 'USD'}
                  </a>
                </li>
              </ul>
            </div>
            <Link to='/order'>
              <button type='button' className='btn btn-warning'>My order <span
                className='badge bg-dark'>{pizzas ? quantity : []}</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
    ;
}