// app/screens/HomeScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from "react-native";
import { sendMessageToGemini } from "../../services/gemini"; // Make sure the path is correct

export default function HomeScreen() {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("");

  const handleSend = async () => {
    if (!inputText.trim()) return;
    setResponseText("⏳ Loading...");
    const response = await sendMessageToGemini(inputText);
    setResponseText(response);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Gemini Chat</Text>

      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        value={inputText}
        onChangeText={setInputText}
      />

      <Button title="Send" onPress={handleSend} />

      <Text style={styles.response}>{responseText}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  response: {
    marginTop: 20,
    fontSize: 16,
  },
});
