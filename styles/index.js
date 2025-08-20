import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA", // very light neutral bg
  },

  header: {
    alignItems: "center",
    paddingVertical: 14,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB", // light gray divider
  },
  logo: {
    width: 46,
    height: 46,
    resizeMode: "contain",
    marginBottom: 6,
  },
  appName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1F2937", // dark gray (almost black)
  },
  tagline: {
    fontSize: 13,
    color: "#6B7280", // muted gray
    marginTop: 2,
  },

  chatArea: {
    flex: 1,
    padding: 12,
  },

  bubbleRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 4,
  },
    bubbleUser: {
    maxWidth: "75%",
    backgroundColor: "rgba(202, 229, 213, 0.85)", // ✅ softer green, logo-inspired
    transparent: true,
    borderWidth: 0.5,
    borderColor: "#c6f2ddff", // light green border
    padding: 10,
    borderRadius: 14,
    borderBottomRightRaius: 4,
  },

  bubbleBot: {
    maxWidth: "75%",
    backgroundColor: "#FFFFFF", // clean white for bot
    padding: 10,
    borderRadius: 14,
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: "#E5E7EB", // subtle border
  },
  bubbleText: {
    fontSize: 15,
    color: "#111827", // strong gray/black
  },

  copyBtn: {
    marginLeft: 6,
    fontSize: 15,
    color: "#9CA3AF", // subtle gray icon
  },

  suggestionsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },
  suggestionBtn: {
    backgroundColor: "#F3F4F6", // very soft gray
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 18,
    margin: 4,
  },

  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },
  input: {
    flex: 1,
    backgroundColor: "#F9FAFB", // near-white input bg
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 8,
    fontSize: 15,
    marginRight: 8,
  },
  sendBtn: {
    backgroundColor: "#374151", // dark gray button
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 18,
  },
  sendText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },
});
