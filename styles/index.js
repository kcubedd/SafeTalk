// styles/index.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFB" },

  // navbar
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 14,
    backgroundColor: "#0D9488", // teal-600
    borderBottomWidth: 1,
    borderBottomColor: "#0F766E",
  },
  navLink: { fontSize: 18, fontWeight: "700", color: "#fff" },

  // header
  header: { alignItems: "center", paddingTop: 18, paddingBottom: 8 },
  logo: { width: 120, height: 120, resizeMode: "contain" },
  appName: { fontSize: 22, fontWeight: "800", marginTop: 8, color: "#0F766E" },
  tagline: { fontSize: 14, fontStyle: "italic", color: "#374151", marginTop: 2 },

  // chat
  chatArea: { flex: 1, paddingHorizontal: 12, paddingVertical: 8 },
  bubbleRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 6,
    gap: 8,
  },
  bubbleUser: {
    flexShrink: 1,
    backgroundColor: "#E0F2F1",
    padding: 12,
    borderRadius: 14,
    borderTopRightRadius: 4,
  },
  bubbleBot: {
    flexShrink: 1,
    backgroundColor: "#EEF2FF",
    padding: 12,
    borderRadius: 14,
    borderTopLeftRadius: 4,
  },
  bubbleText: { fontSize: 16, color: "#111827" },
  copyBtn: { fontSize: 18, padding: 6 },

  // suggestions
  suggestionsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  suggestionBtn: {
    backgroundColor: "#E6FFFB",
    borderWidth: 1,
    borderColor: "#99F6E4",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
  },

  // input
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 22,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  sendBtn: {
    backgroundColor: "#0EA5E9",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 22,
  },
  sendText: { color: "#fff", fontWeight: "800" },

  // about
  aboutContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 10,
  },
  aboutLogo: { width: 140, height: 140, resizeMode: "contain" },
  aboutTitle: { fontSize: 24, fontWeight: "900", color: "#0F766E" },
  aboutText: { fontSize: 16, color: "#4B5563", textAlign: "center" },
});

export default styles;
