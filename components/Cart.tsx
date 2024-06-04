'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FaShoppingCart } from "react-icons/fa";
import { Separator } from "./ui/separator";
import Product from "./Product";
import { useCart } from "@/context/CartContext";


export default function Cart() {
  const { cart } = useCart()

  return( 
    <Popover>
      <PopoverTrigger><FaShoppingCart /></PopoverTrigger>
      
      <PopoverContent>
        <h1 className="font-medium text-center text-xl">Meu carrinho</h1>
        <Separator />

        <Product product={cart} />    
        
      </PopoverContent>
    </Popover>

  )
}