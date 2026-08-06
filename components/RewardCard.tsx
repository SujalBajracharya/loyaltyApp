import AppText from "@/components/AppText";
import styles from "@/styles/styles";
import { Image, View } from "react-native";
import Button from "./Button";
export default function RewardCard() {
  return (
    <View
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
        Free Premium Coffee
      </AppText>

      <AppText
        variant="medium"
        weight="500"
        color="textLight"
        style={{ fontSize: 14, marginBottom: 12 }}
      >
        80 pts
      </AppText>

      <Button style={{ borderRadius: 24 }} title="Redeem" />
    </View>
  );
}
