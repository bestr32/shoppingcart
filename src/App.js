import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import MainNavigation from './components/layout/MainNavigation';
import Homepage from './components/Homepage';
import Cart from './components/Cart';
import Footer from './components/layout/Footer';
import Shop from './components/Shop';

import { CartContextProvider } from './components/store/cart-context';
import ScrollToTop from './components/helpers/ScrollToTop';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = React.useState([
    {
      id: Math.random().toString(),
      name: 'Pizza Burger',
      price: 3,
      rating: 4.5,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/00/EM_PIZZABURGER_%282738947801%29.jpg',
    },
    {
      id: Math.random().toString(),
      name: 'Light Burger',
      price: 2.5,
      rating: 4.5,
      imageUrl:
        'https://c.pxhere.com/photos/dc/8d/appetite_beef_big_bread_bun_burger_calories_cheese-819460.jpg!d',
    },
    {
      id: Math.random().toString(),
      name: 'Veggie Burger',
      price: 2,
      rating: 4.4,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/7e/Veggie_burger_flickr_user_divinemisscopa_creative_commons.jpg',
    },
    {
      id: Math.random().toString(),
      name: 'Chicken Burger',
      price: 1,
      rating: 3.4,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/8/8d/Fried_chicken_Burger_in_Milan%2C_Italy.jpg',
    },
    {
      id: Math.random().toString(),
      name: 'Home Burger',
      price: 1.5,
      rating: 4.3,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/2/22/Homemade_cheeseburger.jpg',
    },
    {
      id: Math.random().toString(),
      name: 'Mama Burger',
      price: 4,
      rating: 5,
      imageUrl:
        'https://p1.pxfuel.com/preview/332/511/698/burger-food-bun-hamburger.jpg',
    },
  ]);

  return (
    <div className='wrapper'>
      <React.Fragment>
        <CartContextProvider>
          <BrowserRouter>
            <ScrollToTop>
              <MainNavigation></MainNavigation>
              <main>
                <Switch>
                  <Route path='/' exact>
                    <Homepage products={products} />
                  </Route>
                  <Route path='/shop' exact>
                    <Shop products={products} />
                  </Route>
                  <Route path='/cart' exact>
                    <Cart />
                  </Route>
                </Switch>
              </main>
            </ScrollToTop>
          </BrowserRouter>
        </CartContextProvider>
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
