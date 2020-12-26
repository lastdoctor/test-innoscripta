import React, { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzaAC } from '@redux/actionCreators/pizzaAC';
import { Card } from '@components/Card';
import { Spinner } from '@components/Spinner';
import { addPizzaOrder } from '@redux/actionCreators/pizzaAC';
import { fetchExchangeAC } from '@redux/actionCreators/currensyAC';

export function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector(store => store);

  useEffect(() => {
    dispatch(fetchPizzaAC());
    dispatch(fetchExchangeAC());
    // dispatch(addPizzaOrder(JSON.parse(localStorage.getItem('pizza'))));
  }, []);

  return (
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      {
        products && products.success ?
          products && products.pizza.map(pizza =>
            <Card key={pizza._id} id={pizza._id} title={pizza.title}
                  description={pizza.description}
                  img={pizza.img} priceUsd={pizza.priceUsd}
            />)
          :
          <Spinner />
      }
    </div>
  );
}