import AppText from "@/components/AppText";
import { Image, TouchableOpacity, View } from "react-native";
export default function UpdateCard() {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: "row",
          paddingHorizontal: 8,
          backgroundColor: "white",
          borderRadius: 8,
          paddingVertical: 16,
          gap: 21,
        },
      ]}
    >
      <Image
        source={require("@/assets/placeholder_image.png")}
        style={{
          width: 108,
          height: 82,
          borderRadius: 8,
          resizeMode: "contain",
        }}
      />

      <View>
        <AppText variant="medium" weight="800" style={{ fontSize: 16 }}>
          25% Off Your Next Pastry
        </AppText>

        <AppText
          variant="medium"
          weight="500"
          color="textLight"
          style={{ fontSize: 12, marginBottom: 12 }}
        >
          Valid till 2 Dec 2025
        </AppText>
      </View>
    </TouchableOpacity>
  );
}
