import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles/index";

export default function Navbar({ navigation }) {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate("screens/HomeScreen")}>
        <Text style={styles.navLink}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("screens/AboutScreen")}>
        <Text style={styles.navLink}>About Us</Text>
      </TouchableOpacity>
    </View>
  );
}
