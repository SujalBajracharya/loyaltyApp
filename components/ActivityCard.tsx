import AppText from "@/components/AppText";
import { Text, TouchableOpacity, View } from "react-native";
export default function ActivityCard() {
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
      <View
        style={{
          width: 56,
          aspectRatio: 1 / 1,
          borderRadius: "50%",
          backgroundColor: "#B5FFB9",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Text style={{ textAlign: "center" }}>+</Text>
      </View>

      <View style={{ flex: 1 }}>
        <AppText variant="medium" weight="800" style={{ fontSize: 16 }}>
          Purchase at Himalayan Java Cafe
        </AppText>

        <AppText
          variant="medium"
          weight="500"
          color="textLight"
          style={{ fontSize: 12, marginBottom: 12 }}
        >
          21 Dec , 2025
        </AppText>
      </View>
      <View>
        <AppText
          variant="bold"
          weight="700"
          size="m"
          style={{ color: "#43A047" }}
        >
          + 50 pts
        </AppText>
      </View>
    </TouchableOpacity>
  );
}
