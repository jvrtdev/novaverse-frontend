'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FaShoppingCart } from "react-icons/fa";
import { Separator } from "./ui/separator";
import { useCart } from "@/context/CartContext";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area"


export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  console.log("esse é meu cart", cart)
  

  return( 
    <Popover>
      <PopoverTrigger><FaShoppingCart /></PopoverTrigger>
      
      <PopoverContent>
        <h1 className="font-medium text-center text-xl">Meu carrinho</h1>
        <Separator />

        <ScrollArea className="h-72 w-full rounded-md border gap-6 flex">
          {cart.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex border items-center gap-2">
                <Image src={item.img} width={50} height={50} alt={item.name} />
                <h3>{item.name}</h3>
                <p>Price: ${item.price} </p>
                <button onClick={() => removeFromCart(item.id)}><MdDelete /></button>
              </div>
            ))
          )
        }
        </ScrollArea>
          

      {cart.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}

         
        
      </PopoverContent>
    </Popover>

  )
}