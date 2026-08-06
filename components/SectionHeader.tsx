import AppText from "@/components/AppText";
import styles from "@/styles/styles";
import { TouchableOpacity, View } from "react-native";

type SectionHeaderProp = {
  title: string;
};

export default function SectionHeader({ title }: SectionHeaderProp) {
  return (
    <View style={styles.row}>
      <AppText variant="medium" weight="bold" style={{ fontSize: 16 }}>
        {title}
      </AppText>

      <TouchableOpacity>
        <AppText variant="regular" size="s" weight="400" color="textLight">
          See All
        </AppText>
      </TouchableOpacity>
    </View>
  );
}
