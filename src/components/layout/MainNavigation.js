import { Link } from 'react-router-dom';
import './MainNavigation.css';

const MainNavigation = () => {
  return (
    <header className='main-header'>
      <img src='/Rectangle 1.svg' alt='Logo' className='logo' />

      <nav>
        <ul className='header__nav'>
          <li>
            <Link to='/' className='header__link'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/cart' className='header__link'>
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
