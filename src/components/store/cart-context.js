import { createContext, useReducer } from 'react';

const CartContext = createContext({
  products: [],
  totalProducts: 0,
  totalPrice: 0,
  addProduct: (product) => {},
  removeProduct: (id) => {},
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const updatedCart = [...state];
      const updatedItemIndex = updatedCart.findIndex(
        (obj) => obj.id === action.val.id
      );

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.val, quantity: 1 });
      } else {
        const updatedItem = { ...updatedCart[updatedItemIndex] };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return [...updatedCart];
    case 'REMOVE_PRODUCT':
      const updatedC = [...state];
      const updatedItemId = updatedC.findIndex(
        (obj) => obj.id === action.val.id
      );

      if (updatedItemId >= 0 && updatedC[updatedItemId].quantity === 1) {
        updatedC.splice(updatedItemId, 1);
      } else {
        const updatedItem = { ...updatedC[updatedItemId] };
        updatedItem.quantity--;
        updatedC[updatedItemId] = updatedItem;
      }

      return [...updatedC];
    default:
      return state || [];
  }
};

export const CartContextProvider = ({ children }) => {
  const [userProducts, userProductsDispatcher] = useReducer(cartReducer, []);

  const addProductHandler = (product) => {
    userProductsDispatcher({ type: 'ADD_PRODUCT', val: product });
  };

  const removeProductHandler = (product) => {
    userProductsDispatcher({ type: 'REMOVE_PRODUCT', val: product });
  };

  const context = {
    products: userProducts,
    totalProducts: userProducts.reduce((acc, obj) => {
      return acc + obj.quantity;
    }, 0),
    totalPrice: userProducts.reduce((acc, obj) => {
      return acc + obj.price * obj.quantity;
    }, 0),
    addProduct: addProductHandler,
    removeProduct: removeProductHandler,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export default CartContext;
