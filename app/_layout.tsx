// app/_layout.tsx
import React from "react";
import { CartProvider } from "./context/cartContext";  // CartProvider'ı import edin
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <CartProvider> {/* CartProvider ile sarın */}
      <Stack />
    </CartProvider>
  );
}
