import { Image, Text, View } from "react-native";
import styles from "../../styles/index";

export default function AboutScreen() {
  return (
    <View style={styles.aboutContainer}>
       <Image
        source={require("../../assets/images/safetalk-logo.png")}
        style={styles.aboutLogo}
      />
      <Text style={styles.aboutTitle}>About SafeTalk</Text>
      <Text style={styles.aboutText}>
        SafeTalk helps detect and counter cyberbullying while promoting healthy conversations.
        The AI layer will be integrated next—this UI is ready for plug-in.
      </Text>
    </View>
  );
}
