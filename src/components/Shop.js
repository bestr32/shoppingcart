import ProductItem from './ProductItem';
import styles from './Shop.module.css';

const Shop = ({ products }) => {
  return (
    <section className={styles.shop}>
      <h1>Shop</h1>
      <ul className={styles.products}>
        {products
          .sort((a, b) => b.rating - a.rating)
          .map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              canOrder
            ></ProductItem>
          ))}
      </ul>
    </section>
  );
};

export default Shop;
