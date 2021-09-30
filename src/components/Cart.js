import { useContext } from 'react';
import CartContext from './store/cart-context';

const Cart = () => {
  const cart = useContext(CartContext);


//   const productsWithCount = cart.products.reduce()

  return (
    <div>
      <h1>Order</h1>
      <ul>
        {cart.products.map((product, idx) => (
          <li key={idx}>{product.name}</li>
        ))}
      </ul>
      Total: ${cart.totalPrice}
    </div>
  );
};

export default Cart;
