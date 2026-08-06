import AppText from "@/components/AppText";
import styles from "@/styles/styles";
import { Image, TouchableOpacity } from "react-native";

export default function MenuCard() {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 12,
        width: 243,
      }}
    >
      <Image
        style={styles.image}
        source={require("@/assets/placeholder_image.png")}
      />

      <AppText variant="medium" weight="800" style={{ fontSize: 16 }}>
        Chicken Wrap
      </AppText>

      <AppText
        variant="medium"
        weight="500"
        color="textLight"
        style={{ fontSize: 14, marginBottom: 12 }}
      >
        Rs 500.00
      </AppText>

      <AppText
        variant="medium"
        weight="500"
        color="primary"
        style={{ fontSize: 14, marginBottom: 12 }}
      >
        Earn +40 pts
      </AppText>
    </TouchableOpacity>
  );
}
