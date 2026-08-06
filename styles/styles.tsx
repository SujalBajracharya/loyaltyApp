import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "space-between",
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#222",
  },

  button: {
    backgroundColor: "#169C90",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  content: {
    marginTop: 98,
    gap: 40,
  },

  header: {
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  subtitle: {
    fontSize: 17,
    color: "#777",
    textAlign: "center",
    lineHeight: 26,
  },
  footer: {
    paddingBottom: 40,
  },
  skip: {
    textAlign: "center",
    color: "#666",
    fontSize: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
  },
  pointsCard: {
    marginTop: -90,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    elevation: 6,
  },
  row: {
    paddingBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 14,
  },
  pointsCardRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  image: {
    width: "100%",
    borderRadius: 12,
    aspectRatio: 1,
    resizeMode: "contain", // or "contain", "stretch", "center"
  },
  divider: {
    marginVertical: 10,
    height: 1,
    backgroundColor: "#E5E5E5",
  },
});

export default styles;
