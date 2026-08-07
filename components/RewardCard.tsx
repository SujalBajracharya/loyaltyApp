import AppText from "@/components/AppText";
import styles from "@/styles/styles";
import { router } from "expo-router";
import { Image, View } from "react-native";
import Button from "./Button";

interface RewardCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function RewardCard({
  id,
  title,
  price,
  image,
}: RewardCardProps) {
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
      <Image style={styles.image} source={{ uri: image }} />

      <AppText variant="medium" weight="800" style={{ fontSize: 16 }}>
        {title}
      </AppText>

      <AppText
        variant="medium"
        weight="500"
        color="textLight"
        style={{ fontSize: 14, marginBottom: 12 }}
      >
        {price} pts
      </AppText>
      <AppText
        variant="medium"
        weight="500"
        color="textLight"
        style={{ fontSize: 14, marginBottom: 12, display: "none" }}
      >
        {id}
      </AppText>

      <Button
        style={{ borderRadius: 24 }}
        title="Redeem"
        onPress={() =>
          router.push({
            pathname: "/home/product/[id]",
            params: { id },
          })
        }
      />
    </View>
  );
}
