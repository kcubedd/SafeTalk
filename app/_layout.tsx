import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "./components/Navbar";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          header: (props) => <Navbar {...props} />,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
