import React, { useContext, useEffect, useState } from 'react';
import CartContext from './store/cart-context';

import './ProductItem.css';

const ProductItem = ({ product, canOrder }) => {
  const cart = useContext(CartContext);
  const [totalInCart, setTotalInCart] = useState(
    cart.products.find((prod) => prod.id === product.id)
      ? cart.products.find((prod) => prod.id === product.id).quantity
      : 0
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalInCart]);

  const addProductHandler = () => {
    cart.addProduct(product);
    setTotalInCart((prevTotal) => prevTotal + 1);
  };

  const removeProductHandler = () => {
    cart.removeProduct(product);

    if (totalInCart > 0)
    setTotalInCart((prevTotal) => prevTotal - 1);
  }

  return (
    <li className='product'>
      {product.name}
      <br />
      <div className='img-holder'>
        <img className='product-img' src={product.imageUrl} alt='Burger' />
      </div>
      {canOrder && (
        <React.Fragment>
          ${product.price}
          <div className='product__ordering'>
            <button className='btn-orders' onClick={removeProductHandler}>
              -
            </button>
            {/* <input
              className='product__order-input'
              type='number'
              value={totalInCart}
              onChange={() => {
                cart.addProduct(product);
              }}
            /> */}
            <p className='order-amount'>{totalInCart}</p>
            <button className='btn-orders' onClick={addProductHandler}>
              +
            </button>
          </div>
        </React.Fragment>
      )}
    </li>
  );
};

export default ProductItem;
