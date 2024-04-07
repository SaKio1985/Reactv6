import './CartProductCard.css';
import PropTypes from 'prop-types';

const CartProductCard = ({ product }) => {
  const {title, price,image, quantity} = product;

  return (
    <div className="cart-product-card">
      <div className='cart-product-container'>
        <img src={image} alt={title} className="cart-product-image" />
        <div className='cart-product-quantity'> 
          {quantity}
        </div>  
      </div>
      
      <div className="cart-product-details">
        <strong >{title}</strong>
        <p >${price} x {quantity}</p>
      </div>

    </div>
  );
}

CartProductCard.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        rate: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }

export default CartProductCard;
