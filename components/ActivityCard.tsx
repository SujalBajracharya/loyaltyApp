import Minus from "@/assets/minus.svg";
import Plus from "@/assets/plus.svg";
import AppText from "@/components/AppText";
import { TouchableOpacity, View } from "react-native";

interface ActivityCardProps {
  title: string;
  date: string;
  points: number;
  onPress?: () => void;
}

export default function ActivityCard({
  title,
  date,
  points,
  onPress,
}: ActivityCardProps) {
  const isCredit = points >= 0;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        paddingHorizontal: 8,
        paddingVertical: 16,
        backgroundColor: "white",
        borderRadius: 8,
        gap: 21,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 56,
          aspectRatio: 1,
          borderRadius: 28,
          backgroundColor: isCredit ? "#B5FFB9" : "#FFD6D6",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isCredit ? (
          <Plus width={15} height={15} />
        ) : (
          <Minus width={15} height={15} />
        )}
      </View>

      <View style={{ flex: 1 }}>
        <AppText variant="medium" weight="800" style={{ fontSize: 16 }}>
          {title}
        </AppText>

        <AppText
          variant="medium"
          weight="500"
          color="textLight"
          style={{ fontSize: 12, marginTop: 4 }}
        >
          {date}
        </AppText>
      </View>

      <View>
        <AppText
          variant="bold"
          weight="700"
          style={{
            color: isCredit ? "#43A047" : "#E53935",
          }}
        >
          {points > 0 ? `+${points}` : points} pts
        </AppText>
      </View>
    </TouchableOpacity>
  );
}
