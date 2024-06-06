import { FaCartPlus } from "react-icons/fa";
import Image from 'next/image';
import { useCart } from '../context/CartContext';




const Product = ({ product }: any) => {
  const { addToCart } = useCart()
  return (
    <div className="flex flex-col p-4 shadow-xl max-w-max flex-wrap border bg-slate-100 ">
      <Image src={product.img} alt={product.img} width={250} height={250} />
      <h2 className='text-xl font-medium'>{product.name}</h2>
      <em className=''>{product.description}</em>
      <p>${product.price}</p>
      <button className="text-xl" onClick={() => addToCart(product.id)}><FaCartPlus /></button>
    </div>
  );
};

export default Product;
