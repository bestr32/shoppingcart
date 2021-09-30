import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import MainNavigation from './components/layout/MainNavigation';
import Homepage from './components/Homepage';
import Cart from './components/Cart';
import Footer from './components/layout/Footer';

function App() {
  const [products, setProducts] = React.useState([
    { id: Math.random().toString(), name: 'Pizza Burger', rating: 4.5 },
    { id: Math.random().toString(), name: 'Light Burger', rating: 4.2 },
    { id: Math.random().toString(), name: 'Veggie Burger', rating: 5 },
    { id: Math.random().toString(), name: 'Chicken Burger', rating: 3.4 },
    { id: Math.random().toString(), name: 'Home Burger', rating: 5 },
    { id: Math.random().toString(), name: 'Mama Burger', rating: 4.6 },
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
