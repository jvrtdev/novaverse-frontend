import { FaCartPlus } from "react-icons/fa";
import Image from 'next/image';
import { useCart } from '../context/CartContext';




const Product = ({ product }: any) => {

  return (
    <div className="flex items- flex-col p-4 shadow-xl max-w-max rounded-xl border bg-slate-100 ">
      <Image src={product.img} alt={product.img} width={250} height={250} />
      <h2 className='text-xl font-medium'>{product.nome}</h2>
      <em className=''>{product.descricao}</em>
      <p>${product.preco}</p>
      <button className="text-xl" onClick={() => console.log("click")}><FaCartPlus /></button>
    </div>
  );
};

export default Product;
