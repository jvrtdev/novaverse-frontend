'use client'
import { ProductProps } from "@/@types/product";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Product from "@/components/Product";
import { useCart } from "@/context/CartContext";
import api from "@/services/api";
import { fetchProducts } from "@/services/get-products";
import { useEffect, useState } from "react";


export default function Home() {
  const [ products, setProducts ] = useState<ProductProps[]>([]);
  const [ loading, setLoading ] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    fetchProducts()
    setLoading(false)
  }, [])

  const fetchProducts = async () => {
    try{
      const response = await api.get('/api/products')
      return setProducts(response.data) 
      
    } catch(error) {
      return error
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MaxWidthWrapper>
        <div className="flex items-center justify-center">

          <div className="flex gap-4">
            {loading ? <div>CARREGANDO...</div> : ''}
            {products.map((product) => (
              <div>
                <Product key={product.id} product={product} />
              </div>
            ))}  
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
