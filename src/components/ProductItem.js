import React, { useContext, useState } from 'react';
import CartContext from './store/cart-context';

import './ProductItem.css';

const ProductItem = ({ product, canOrder }) => {
  const cart = useContext(CartContext);
  const [totalInCart, setTotalInCart] = useState(
    cart.countProductInCart(product.id)
  );

  const addProductHandler = () => {
    setTotalInCart(cart.addProduct(product));
  };
  
  const removeProductHandler = () => {
    setTotalInCart(cart.removeProduct(product));
  };

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
            {totalInCart}
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
