import './ProductItem.css';

const ProductItem = ({ product, amount }) => {
  return (
    <li className='product'>
      {product.name}
      <br />
      <button className='btn-orders'>-</button>
      <input className='product__order-input' type='number' value={amount} />
      <button className='btn-orders'>+</button>
    </li>
  );
};

export default ProductItem;
