import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import styles from "../../styles/index";

export default function HomeScreen() {
  const [messages, setMessages] = useState([
    {
      id: "bot-welcome",
      role: "bot",
      text:
        "Hi! I’m SafeTalk—your shield against online toxicity. How can I help today?",
    },
  ]);
  const [input, setInput] = useState("");

  const pushMessage = (role, text) =>
    setMessages((m) => [...m, { id: Date.now().toString(), role, text }]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    pushMessage("user", trimmed);
    setInput("");

    // mock bot reply so UI feels alive
    setTimeout(() => {
      pushMessage(
        "bot",
        "Thanks for sharing. I’ll analyze this for bullying signals when AI is connected."
      );
    }, 250);
  };

  const handleCopy = async (text) => {
    await Clipboard.setStringAsync(text);
    Alert.alert("Copied", "Message copied to clipboard.");
  };

  const renderItem = ({ item }) => {
    const isUser = item.role === "user";
    return (
      <View style={[styles.bubbleRow, { justifyContent: isUser ? "flex-end" : "flex-start" }]}>
        <View style={isUser ? styles.bubbleUser : styles.bubbleBot}>
          <Text style={styles.bubbleText}>{item.text}</Text>
        </View>
        <TouchableOpacity onPress={() => handleCopy(item.text)}>
          <Text style={styles.copyBtn}>📋</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Image source={require("../../assets/images/safetalk-logo.png")} style={styles.logo} />
        <Text style={styles.appName}>SafeTalk</Text>
        <Text style={styles.tagline}>your shield against online city</Text>
      </View>

      {/* chat list */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.chatArea}
        contentContainerStyle={{ paddingBottom: 12 }}
      />

      {/* quick suggestions */}
      <View style={styles.suggestionsWrap}>
        {["Hi 👋", "I need help", "Report harassment", "How to stay safe?"].map((s) => (
          <TouchableOpacity key={s} style={styles.suggestionBtn} onPress={() => setInput(s)}>
            <Text>{s}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* input bar */}
      <View style={styles.inputBar}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type your message…"
          returnKeyType="send"
          onSubmitEditing={handleSend}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
