import { Fragment, useContext } from 'react';
import CartContext from './store/cart-context';

import './Cart.css';

const Cart = () => {
  const cart = useContext(CartContext);

  //   const productsWithCount = cart.products.reduce()

  return (
    <section className='cart-wrapper'>
      <div className='cart'>
        <h1>Order</h1>
        {cart.products.length === 0 ? (
          <p>No products found...</p>
        ) : (
          <Fragment>
            <ul>
              {cart.products.map((product, idx) => (
                <li key={idx}>
                  {product.name} x{product.quantity}
                </li>
              ))}
            </ul>
            Total: ${cart.totalPrice}
            <br />
            <button className='cart-btn'>Checkout</button>{' '}
          </Fragment>
        )}
      </div>
    </section>
  );
};

export default Cart;
