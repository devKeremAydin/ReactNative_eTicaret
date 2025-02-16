import { Text, View } from "react-native";
import {Link} from 'expo-router';
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/cart">sepet</Link>
      <Link href="/profile">profile</Link>
      <Link href="/products">ürünler</Link>
    </View>
  );
}
