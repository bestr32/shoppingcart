import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import MainNavigation from './components/layout/MainNavigation';
import Homepage from './components/Homepage';
import Cart from './components/Cart';
import Footer from './components/layout/Footer';

function App() {
  const [products, setProducts] = React.useState([
    {
      id: Math.random().toString(),
      name: 'Pizza Burger',
      rating: 4.5,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/00/EM_PIZZABURGER_%282738947801%29.jpg',
    },
    {
      id: Math.random().toString(),
      name: 'Light Burger',
      rating: 4.5,
      imageUrl:
        'https://c.pxhere.com/photos/dc/8d/appetite_beef_big_bread_bun_burger_calories_cheese-819460.jpg!d',
    },
    { id: Math.random().toString(), name: 'Veggie Burger', rating: 4.4 },
    { id: Math.random().toString(), name: 'Chicken Burger', rating: 3.4 },
    { id: Math.random().toString(), name: 'Home Burger', rating: 4.3 },
    {
      id: Math.random().toString(),
      name: 'Mama Burger',
      rating: 5,
      imageUrl:
        'https://p1.pxfuel.com/preview/332/511/698/burger-food-bun-hamburger.jpg',
    },
  ]);

  // eslint-disable-next-line no-unused-vars
  const addProduct = (productInfo) => {
    setProducts((prevProducts) => prevProducts.concat(productInfo));
  };

  return (
    <div className='wrapper'>
      <React.Fragment>
        <BrowserRouter>
          <MainNavigation></MainNavigation>
          <main>
            <Switch>
              <Route path='/' exact>
                <Homepage products={products} />
              </Route>
              <Route path='/cart' exact>
                <Cart />
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
