import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    marginTop: 60,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 320,
    padding: 20,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  infoContainer: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },

  category: {
    fontSize: 13,
    color: "#6B7280",
    fontWeight: "600",
    letterSpacing: 1,
    marginBottom: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    lineHeight: 32,
  },

  price: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2563EB",
    marginTop: 18,
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 24,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#111827",
  },

  description: {
    fontSize: 15,
    color: "#4B5563",
    lineHeight: 24,
  },

  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    gap: 12,
  },

  cartButton: {
    flex: 1,
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
  },

  buyButton: {
    flex: 1,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
  },

  cartText: {
    color: "#111827",
    fontWeight: "600",
    fontSize: 16,
  },

  buyText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default styles;
