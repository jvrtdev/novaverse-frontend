import { ProductProps } from "@/@types/product";
import api from "./api";


export async function addProductOnCart(product: ProductProps){
  try{
    const response = await api.post('/cart/product/add', product)
    return response.data;
    
  } catch(error) {
    console.log(error)
    return error
  }

}