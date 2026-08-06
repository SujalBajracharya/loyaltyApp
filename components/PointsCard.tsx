import Money from "@/assets/money.svg";
import AppText from "@/components/AppText";
import styles from "@/styles/styles";
import { TouchableOpacity, View } from "react-native";

export default function PointsCard() {
  return (
    <View style={styles.pointsCard}>
      <View style={styles.pointsCardRow}>
        <Money height="59" width="59" />
        <View>
          <AppText
            variant="medium"
            color="textLight"
            style={{ fontSize: 12, fontWeight: 500 }}
          >
            Your Points
          </AppText>

          <AppText
            variant="medium"
            color="textDark"
            style={{ fontSize: 24, fontWeight: 500 }}
          >
            100.00
          </AppText>
        </View>
      </View>

      <View style={styles.divider} />

      <TouchableOpacity>
        <AppText
          variant="medium"
          color="primary"
          size="s"
          weight="500"
          style={{ textAlign: "center" }}
        >
          POINTS HISTORY
        </AppText>
      </TouchableOpacity>
    </View>
  );
}
