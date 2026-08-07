import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    fontSize: 28,
    fontWeight: "700",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    color: "#111827",
  },

  buttonContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 25,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },

  name: {
    marginTop: 12,
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },

  username: {
    marginTop: 4,
    fontSize: 16,
    color: "#6B7280",
  },

  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    padding: 18,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
    color: "#111827",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  textContainer: {
    marginLeft: 14,
    flex: 1,
  },

  label: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 2,
  },

  value: {
    fontSize: 16,
    color: "#111827",
    fontWeight: "500",
  },
});

export default styles;
