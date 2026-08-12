import Icon1 from "@/assets/OnboardingLogo1.svg";
import Icon2 from "@/assets/OnboardingLogo2.svg";
import Icon3 from "@/assets/OnboardingLogo3.svg";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "../../components/AppText";
import BenefitCard from "../../components/benefitCard";
import Pagination from "../../components/pagination";
import styles from "../../styles/styles";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View
        style={{
          flex: 1,
          marginTop: 78,
          gap: 72,
        }}
      >
        {/* Title */}
        <View style={styles.header}>
          <AppText
            variant="bold"
            size="l"
            color="textDark"
            style={{ textAlign: "center", fontSize: 28, fontWeight: "600" }}
          >
            Your Benefits at a{"\n"}Glance
          </AppText>

          <AppText
            variant="regular"
            size="s"
            color="textLight"
            style={{ textAlign: "center", fontSize: 14, fontWeight: "400" }}
          >
            Get points, rewards and exclusive deals{"\n"}
            when you join
          </AppText>
        </View>

        {/* Cards */}
        <View style={{ gap: 18 }}>
          <BenefitCard
            icon={<Icon1 width={28} height={28} />}
            title="Earn Points Instantly"
          />
          <BenefitCard
            icon={<Icon2 width={28} height={28} />}
            title="Redeem Exclusive Rewards"
          />
          <BenefitCard
            icon={<Icon3 width={28} height={28} />}
            title="Access Member-Only Deals"
          />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={{ marginTop: 68, alignItems: "center" }}>
          <Pagination total={3} activeIndex={0} />
        </View>

        <View style={{ marginTop: 60, gap: 0 }}>
          <Button
            title="Continue"
            onPress={() => router.push("/onboarding/howItWorks")}
          />
          <Button
            title="Skip"
            variant="ghost"
            onPress={() => {
              router.dismissAll();
              router.replace("/signup");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
