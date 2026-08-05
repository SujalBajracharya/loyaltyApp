import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pagination from "../../components/pagination";
import styles from "../../styles/styles";
import AppText from "../../components/AppText";
import Button from "@/components/Button";
import Lock from "@/assets/Lock.svg";

import { useRouter } from "expo-router";

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
        {/* header */}
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 53,
            flex: 1,
          }}
        >
          <Lock width={125} height={125} />
          <View style={{ gap: 12, alignItems: "center" }}>
            <AppText
              variant="medium"
              size="l"
              color="textDark"
              style={{ textAlign: "center", fontSize: 28, fontWeight: "600" }}
            >
              Your Data Stays Private
            </AppText>

            <AppText
              variant="regular"
              size="s"
              color="textLight"
              style={{ textAlign: "center", fontSize: 14, fontWeight: "400" }}
            >
              We use industry-standard encryption to keep {"\n"}
              your information safe and never share it {"\n"}
              without your permission {"\n"}
            </AppText>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={{ marginTop: 68, alignItems: "center" }}>
          <Pagination total={3} activeIndex={2} />
        </View>

        <View style={{ marginTop: 60, gap: 0 }}>
          <Button
            title="Continue"
            onPress={() => router.push("/signup")}
          />
          <Button title="Skip" variant="ghost" onPress={() => router.back()} />
        </View>
      </View>
    </SafeAreaView>
  );
}
