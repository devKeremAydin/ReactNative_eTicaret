import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import { useCart } from "../../context/cartContext";
import { Product } from "../../context/cartContext";

const products: Product[] = [
  { id: "1", name: "Telefon", price: "₺15.000", image: "https://images.samsung.com/is/image/samsung/p6pim/tr/2501/gallery/tr-galaxy-s25-s938-sm-s938bzbdtur-thumb-544710568?$272_N_PNG$" },
  { id: "2", name: "Laptop", price: "₺25.000", image: "https://www.laptop.com.tr/wp-content/uploads/2024/01/msi-cyborg-15-a13vf-895xtr-intel-core-i5-13420h-16gb-ddr5-1tb-ssd-rtx4060-8gb-15-6-inc-144hz-full-hd-freedos-gaming-laptop.jpg" },
  { id: "3", name: "Kulaklık", price: "₺2.500", image: "https://m.media-amazon.com/images/I/61JHEfCeJOL.jpg" },
  { id: "4", name: "Saat", price: "₺1.200", image: "https://cdn.akakce.com/z/samsung/samsung-galaxy-watch-7-44mm.jpg" },
];

const Products: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
              <Text style={styles.buttonText}>Sepete Ekle</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    fontSize: 16,
    color: "#888",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
