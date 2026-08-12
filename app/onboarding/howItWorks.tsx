import Button from "@/components/Button";
import FlowCard from "@/components/FlowCard";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "../../components/AppText";
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
        <View style={styles.header}>
          <AppText
            variant="medium"
            size="l"
            color="textDark"
            style={{ textAlign: "center", fontSize: 28, fontWeight: "600" }}
          >
            How It Works
          </AppText>
        </View>

        <FlowCard />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={{ marginTop: 68, alignItems: "center" }}>
          <Pagination total={3} activeIndex={1} />
        </View>

        <View style={{ marginTop: 60, gap: 0 }}>
          <Button
            title="Continue"
            onPress={() => router.push("/onboarding/data")}
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
