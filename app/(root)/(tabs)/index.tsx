import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoş Geldiniz</Text>

      {/* Butonları içeren alt bar */}
      <View style={styles.bottomNav}>
        <Link href="/products" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ürünler</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/cart" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sepet</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/profile" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row", 
    justifyContent: "space-around", 
    backgroundColor: "#fff", 
    paddingVertical: 12, 
    borderTopWidth: 1, 
    borderColor: "#ddd", 
  },
  button: {
    flex: 1, 
    alignItems: "center",
    paddingVertical: 12,
  },
  buttonText: {
    color: "#4CAF50",
    fontSize: 16,
    fontWeight: "bold",
  },
});
