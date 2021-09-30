import './ProductItem.css';

const ProductItem = ({ product, amount, canOrder }) => {
  return (
    <li className='product'>
      {product.name}
      <br />
      <div className='img-holder'>
        <img className='product-img' src={product.imageUrl} alt='burger' />
      </div>
      {canOrder && (
        <div>
          <button className='btn-orders'>-</button>
          <input
            className='product__order-input'
            type='number'
            value={amount}
          />
          <button className='btn-orders'>+</button>
        </div>
      )}
    </li>
  );
};

export default ProductItem;
