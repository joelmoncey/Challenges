// src/store/cartStore.js
import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  cartItems: [],
  
  // Action to add an item to the cart
  addToCart: (product) => set((state) => {
    // Check if item already exists in cart
    const existingItem = state.cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      // If it exists, increase the quantity
      return {
        cartItems: state.cartItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      };
    }
    
    // If it's new, add it to the array with quantity 1
    return {
      cartItems: [...state.cartItems, { ...product, quantity: 1 }]
    };
  }),

  // Action to remove an item completely
  removeFromCart: (productId) => set((state) => ({
    cartItems: state.cartItems.filter(item => item.id !== productId)
  })),

  // Action to clear the entire cart
  clearCart: () => set({ cartItems: [] }),

  // Derived state: Get total number of items (useful for a Navbar cart badge)
  getTotalItems: () => {
    return get().cartItems.reduce((total, item) => total + item.quantity, 0);
  },

  // Derived state: Get total price
  getTotalPrice: () => {
    return get().cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}));