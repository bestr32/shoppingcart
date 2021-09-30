import { createContext, useState } from 'react';

const CartContext = createContext({
  products: [],
  totalProducts: 0,
  totalPrice: 0,
  addProduct: (product) => {},
  removeProduct: (id) => {},
  countProductInCart: (id) => {},
});

export const CartContextProvider = ({ children }) => {
  const [userProducts, setUserProducts] = useState([]);

  const addProductHandler = (product) => {
    let count = 0;

    setUserProducts((prevProducts) => prevProducts.concat(product));

    userProducts.forEach((prod) => {
      if (prod === product) {
        count++;
      }
    });

    return count + 1;
  };

  const removeProductHandler = (product) => {
    let count = 0;

    setUserProducts((prevProducts) => {
      let temp = prevProducts;
      temp.splice(temp.indexOf(product), 1);
      console.log(temp);
      return temp;
    });

    return count;
  };

  const countProductInCart = (id) => {
    let count = 0;

    userProducts.forEach((prod) => {
      if (prod.id === id) {
        count++;
      }
    });

    return count;
  };

  const context = {
    products: userProducts,
    totalProducts: userProducts.length,
    totalPrice: userProducts.reduce((acc, product) => {
      return acc + product.price;
    }, 0),
    addProduct: addProductHandler,
    removeProduct: removeProductHandler,
    countProductInCart,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export default CartContext;
