'use client'
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import api from '@/services/api';
import { toast } from 'sonner';
import * as Popover from '@radix-ui/react-popover';

interface CartItem {
  img: string;
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (productId: number) => Promise<void>;
  removeFromCart: (productId: number) => Promise<void>;
  clearCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const id =  localStorage.getItem('id');
    if(id){
      try {
        const response = await api.get(`/api/cart/${id}`);
        console.log("aquii vem do cartcontext",response.data)
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
    }
    
    toast("Faça login para visualizar o carrinho",
      {
        action: {
          label: "Login",
          onClick: () => ''
        }
      }
    )
  }
  };

  const addToCart = async (productId: number) => {
    const lsItem: any = localStorage.getItem('id')
    const id = parseInt(lsItem, 10);
    if(id){
      const data = {cart_id: id, product_id: productId, quantity: 1}
      try {
        const response = await api.post(`/api/cart/product`, data);
        setCart(response.data)
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    }
    
  };

  const removeFromCart = async (productId: any) => {
    const ls: any = localStorage.getItem("id");
    const data: any = {cart_id: +ls, product_id: productId}
    try {
      const response = await api.delete(`/api/cart/delete/item`, data);
      setCart(response.data);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const clearCart = async () => {
    try {
      await api.post('/api/cart/clear');
      setCart([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
