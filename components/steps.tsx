import { View, Text, StyleSheet } from "react-native";
import { AppText } from "./AppText";
import { ReactNode } from "react";

type StepProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
};

export default function Step({ icon, title, subtitle }: StepProps) {
  return (
    <View style={styles.step}>
      <View style={styles.iconCircle}>{icon}</View>

      <AppText
        size="m"
        variant="medium"
        color="textDark"
        style={{ fontWeight: "700", marginBottom: 8, textAlign: "center" }}
      >
        {title}{" "}
      </AppText>
      <AppText
        size="s"
        variant="regular"
        color="textLight"
        style={{ fontWeight: "400", textAlign: "center" }}
      >
        {subtitle}{" "}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  step: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
  },

  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#D9F2FA",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  leftSpacer: {
    height: 0,
  },

  middle: {
    alignSelf: "flex-end",
    marginRight: 55,
    marginBottom: -15,
  },
});
