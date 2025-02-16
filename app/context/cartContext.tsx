import React, { createContext, useContext, useState, ReactNode } from "react";


export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
};


type cartContextType = {
  cartItems: { [id: string]: { product: Product; quantity: number } };
  addToCart: (product: Product) => void;
  clearCart: () => void;
};


type CartProviderProps = {
  children: ReactNode; 
};

const cartContext = createContext<cartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<{ [id: string]: { product: Product; quantity: number } }>({});

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems[product.id];
      if (existingItem) {
        return {
          ...prevItems,
          [product.id]: {
            product,
            quantity: existingItem.quantity + 1,
          },
        };
      } else {
        return {
          ...prevItems,
          [product.id]: { product, quantity: 1 },
        };
      }
    });
  };

  const clearCart = () => {
    setCartItems({});
  };

  return (
    <cartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </cartContext.Provider>
  );
};
