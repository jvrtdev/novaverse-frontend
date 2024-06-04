
import { useCart } from '../context/CartContext';




const Product = ({ product }: any) => {

  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => console.log("click")}>Add to Cart</button>
    </div>
  );
};

export default Product;
