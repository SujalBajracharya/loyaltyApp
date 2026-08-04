import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppText } from "./AppText";

type Props = {
  icon: ReactNode;
  title: string;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 35,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 5,
  },

  iconCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#D9F2FA",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 18,
  },
});

export default function BenefitCard({ icon, title }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.iconCircle}>
        {icon}
      </View>

      <AppText size="m" color="textDark" variant="medium">
        {title}
      </AppText>
    </View>
  );
}
