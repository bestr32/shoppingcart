import React from 'react';
import './Homepage.css';

import { Link } from 'react-router-dom';

import ProductItem from './ProductItem';

const Homepage = ({ products }) => {
  const [currentReview, setCurrentReview] = React.useState();

  React.useEffect(() => {
    const customerReviews = [
      "Best food I've had in a long time.",
      'The dishes are really great.',
      'The best place to eat out.',
      'Such a good atmosphere.',
    ];

    setCurrentReview(customerReviews[0]);

    let interval = setInterval(() => {
      setCurrentReview((prevReview) => {
        if (prevReview === customerReviews[customerReviews.length - 1]) {
          return customerReviews[0];
        } else {
          return customerReviews[customerReviews.indexOf(prevReview) + 1];
        }
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='homepage'>
      <section className='top-burgers'>
        <h1 className='homepage__h1'>Top Burgers </h1>
        <p>
          <em>This is what our customers liked the most</em>
        </p>
        <ul className='top-products'>
          {products
            .filter((product) => product.rating >= 4.5)
            .map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                canOrder={false}
              ></ProductItem>
            ))}
        </ul>
        <div className='top-burgers__link'>
          <Link to='shop' className='homepage__product-button'>
            See all burgers.
          </Link>
        </div>
      </section>
      <section className='homepage__description-first'>
        <p>We offer the best burgers in town.</p>
      </section>
      <section className='homepage__description-second'>
        <p className='customers-heading'>What the customers are saying</p>
        <blockquote className='review-block'>
          <p className='review-quote'>{currentReview}</p>
        </blockquote>
      </section>
      <Link to='/shop' className='homepage__description-first'>
        <p>See all burgers.</p>
      </Link>
    </div>
  );
};

export default Homepage;
