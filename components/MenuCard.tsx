import AppText from "@/components/AppText";
import styles from "@/styles/styles";
import { Image, TouchableOpacity } from "react-native";

type MenuCardProps = {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
};

export default function MenuCard({
  id,
  title,
  image,
  price,
  rating,
}: MenuCardProps) {
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
      <Image style={styles.image} source={{ uri: image }} />

      <AppText
        variant="medium"
        weight="800"
        style={{ fontSize: 16 }}
        numberOfLines={2}
      >
        {title}
      </AppText>

      <AppText
        variant="medium"
        weight="500"
        color="textLight"
        style={{ fontSize: 14, marginBottom: 12 }}
      >
        Rs {price}
      </AppText>

      <AppText
        variant="medium"
        weight="500"
        color="primary"
        style={{ fontSize: 14, marginBottom: 12 }}
      >
        Earn +{rating} pts
      </AppText>
    </TouchableOpacity>
  );
}
