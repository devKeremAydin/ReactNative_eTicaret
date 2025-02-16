import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useCart } from "../../context/cartContext";

const Cart: React.FC = () => {
  const { cartItems, clearCart } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sepet</Text>
      {Object.keys(cartItems).length === 0 ? (
        <Text style={styles.emptyText}>Sepetiniz boş</Text>
      ) : (
        <FlatList
          data={Object.values(cartItems)} 
          keyExtractor={(item) => item.product.id}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Text style={styles.productName}>{item.product.name}</Text>
              <Text style={styles.price}>{item.product.price}</Text>
              <Text style={styles.quantity}>Adet: {item.quantity}</Text> {}
            </View>
          )}
        />
      )}
      <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
        <Text style={styles.buttonText}>Sepeti Temizle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 18,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
  cartItem: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "#666",
  },
  quantity: {
    fontSize: 16,
    color: "#333",
    marginTop: 5,
  },
  clearButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 12,
    marginTop: 20,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
