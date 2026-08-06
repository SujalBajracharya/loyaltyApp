import Bell from "@/assets/bell.svg";
import ActivityCard from "@/components/ActivityCard";
import AppText from "@/components/AppText";
import FloatingQRButton from "@/components/FloatingQRButton";
import MenuCard from "@/components/MenuCard";
import PointsCard from "@/components/PointsCard";
import RewardCard from "@/components/RewardCard";
import SectionHeader from "@/components/SectionHeader";
import UpdateCard from "@/components/UpdateCard";
import { theme } from "@/constants/theme";
import { ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* header */}
        <View style={styles.header}>
          <View>
            <AppText variant="medium" size="m" color="background" weight="500">
              Hi, Sarah Candra
            </AppText>
          </View>
          {/* icon */}
          <Bell width="24" height="24" />
        </View>

        {/* Rest of the Section inside margin */}
        <View style={{ marginHorizontal: 20 }}>
          <PointsCard />

          {/* main */}
          <View style={{ gap: 24, marginTop: 18 }}>
            {/* Claim your Rewards */}
            <View>
              <SectionHeader title="Claim your rewards" />
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 18 }}
              >
                <RewardCard />
                <RewardCard />
                <RewardCard />
                <RewardCard />
              </ScrollView>
            </View>

            {/* Our Menu */}
            <View>
              <SectionHeader title="Our Menu" />
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 18 }}
              >
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
              </ScrollView>
            </View>

            {/* News & Updates */}
            <View>
              <SectionHeader title="News & Updates" />
              <View style={{ gap: 11 }}>
                <UpdateCard />
                <UpdateCard />
                <UpdateCard />
                <UpdateCard />
              </View>
            </View>

            {/* Recent Activity */}
            <View>
              <SectionHeader title="Recent Activity" />
              <View style={{ gap: 11 }}>
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
              </View>
            </View>
          </View>
          <FloatingQRButton />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  content: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: theme.colors.primary,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 120,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
