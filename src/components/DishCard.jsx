import '../styles/DishCard.css';

const DishCard = ({ product }) => {
  return (
    <div className="menu-card">
      <div
        className="menu-image"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">{product.price} ₽</p>
    </div>
  );
};

export default DishCard;