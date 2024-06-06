'use client'
import { ProductProps } from "@/@types/product";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Product from "@/components/Product";
import { useCart } from "@/context/CartContext";
import api from "@/services/api";
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
      console.log(response.data)
      return setProducts(response.data) 
     
    } catch(error) {
      return error
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MaxWidthWrapper>
        <div className="flex items-center justify-center">

          <div className="flex gap-4 flex-wrap w-full items-center">
          {loading ? <div>CARREGANDO...</div> : ''}
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product.id}>
                  <Product product={product} />
                </div>
              ))
            ) : (
              !loading && <div>No products found</div>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
