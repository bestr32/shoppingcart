import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContextProvider from '../store/cart-context';
import './MainNavigation.css';

const MainNavigation = () => {
  const cart = useContext(CartContextProvider);

  return (
    <header className='main-header'>
      <img src='/Rectangle 1.svg' alt='Logo' className='logo' />

      <nav>
        <ul className='header__nav'>
          <li>
            <NavLink
              to='/'
              exact
              className='header__link'
              activeClassName='header__link-active'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/shop'
              className='header__link'
              activeClassName='header__link-active'
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/cart'
              className='header__link'
              activeClassName='header__link-active'
            >
              Cart ({cart.totalProducts})
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
