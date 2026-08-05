import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pagination from "../../components/pagination";
import styles from "../../styles/styles";
import AppText from "../../components/AppText";
import Button from "@/components/Button";
import Tick from "@/assets/tick.svg";

import { useRouter } from "expo-router";

export default function AllSetScreen() {
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
          <Tick width={125} height={125} />
          <View style={{ gap: 12, alignItems: "center" }}>
            <AppText
              variant="medium"
              size="l"
              color="textDark"
              style={{ textAlign: "center", fontSize: 28, fontWeight: "700" }}
            >
              All Set !
            </AppText>

            <AppText
              variant="regular"
              size="s"
              color="textLight"
              style={{ textAlign: "center", fontSize: 14, fontWeight: "400" }}
            >
              Thanks! Your rewards wll now match your{"\n"}interests
            </AppText>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View
        style={{
          paddingBottom: 90,
        }}
      >
        <View style={{ marginTop: 68, alignItems: "center" }}>
          <Button title="Get Started" onPress={() => router.push("../signin")} />
        </View>
      </View>
    </SafeAreaView>
  );
}
