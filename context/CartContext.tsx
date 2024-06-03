import { ProductProps } from "@/@types/product";
import { addProductOnCart } from "@/services/add-on-cart";
import { getProductByCart } from "@/services/get-product-by-cart";
import { createContext, useContext, useState, ReactNode } from "react";

const CartContext = createContext('');


export const CartProvider = (children:ReactNode) => {
  const [ cart, setCart ] = useState([])

  return(
    <>
    </>
  )
  
}

export const useCart = () => useContext(CartContext);