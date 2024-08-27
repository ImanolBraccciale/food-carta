// components.dto.tsx

export interface CartItem {
    id: string; // O un tipo adecuado para tu ítem
    name: string;
    price: string;
    img: string;
    quantity: number; // Agrega esta propiedad
  }
  
  export interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void; // Ajusta el tipo aquí
    removeFromCart: (id: CartItem) => void;
  }
  