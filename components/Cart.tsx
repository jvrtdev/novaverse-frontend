'use client'
import { ProductProps } from "@/@types/product";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useEffect, useState } from "react";


import { FaShoppingCart } from "react-icons/fa";
import { Separator } from "./ui/separator";
import { getProductByCart } from "@/services/get-product-by-cart";
import Image from "next/image";


export default function Cart() {

  return( 
    <Popover>
      <PopoverTrigger><FaShoppingCart /></PopoverTrigger>
      
      <PopoverContent>
        <h1 className="font-medium text-center text-xl">Meu carrinho</h1>
        <Separator />
          
      </PopoverContent>
    </Popover>

  )
}