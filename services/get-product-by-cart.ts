import api from "./api";



export async function getProductByCart(cartId: any){
  const id = +cartId;
  try{
    const response = await api.get(`/cart/${id}`);
    return response.data
  } catch(error){
    return null
  }
}