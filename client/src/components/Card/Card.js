import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPizzaOrder } from '@redux/actionCreators/pizzaAC';

export function Card({ title, description, img, priceUsd, id }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(priceUsd);
  const { euro } = useSelector(store => store.currency);
  let pizza = JSON.parse(localStorage.getItem('pizza'));

  function clickHandler() {
    setQuantity(quantity + 1);
    const newPizza = {
      id,
      title,
      price: price,
      quantity,
    };
    const isExist = pizza.order.findIndex(el => el.id === id);
    if (isExist === -1) {
      pizza.order.push(newPizza);
    } else {
      pizza.order.splice(isExist, 1, newPizza);
    }
    dispatch(addPizzaOrder(pizza));
    localStorage.setItem('pizza', JSON.stringify(pizza));
  }

  return (
    <div className='col'>
      <img src={img} className='card-img-top img-thumbnail' alt='img-pizza' />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
        <div>
          <div className='btn'>from $ {price}</div>
          <button className='btn btn-warning' onClick={clickHandler}>Select</button>
        </div>
      </div>
    </div>
  );
}