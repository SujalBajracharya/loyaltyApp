import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { AppText } from "./AppText";
import Step from "./steps";
import Earn from "@/assets/earn.svg";
import Track from "@/assets/track.svg";
import Redeem from "@/assets/redeem.svg";
import TurnArrow from "@/assets/turnArrow.svg";

export default function FlowCard() {
  return (
    <View style={styles.card}>
      {/* Top Row */}
      <View style={styles.row}>
        <Step icon={<Earn width={28} height={28} />} title="Earn" subtitle="points for your purchase" />
        <View style={styles.step}>
          <Ionicons name="arrow-forward" size={42} color="#159A8D" />
        </View>
        <Step icon={<Track width={28} height={28} />} title="Track" subtitle="your progress in the app" />
      </View>

      {/* Bottom */}
      <View style={styles.bottomRow}>
        <View style={[styles.step, {alignItems: "baseline",}]}>
          <TurnArrow height={42} width ={42} />
        </View>
        <Step icon={<Redeem width={28} height={28} />} title="Redeem" subtitle="your points for reward" />
        <View style={styles.step}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 365,
    backgroundColor: "#fff",
    borderRadius: 32,
    paddingVertical: 16,
    paddingHorizontal: 8,
    flexDirection: "column",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    elevation: 6,
  },

  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomRow: {
    height: "30%",
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
  step: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
  },
});
