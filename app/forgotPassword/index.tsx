import { View, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../styles/styles";
import AppText from "../../components/AppText";
import Button from "@/components/Button";
import { useRouter, Stack } from "expo-router";
import InputField from "@/components/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignupProcessScreen() {
  type ForgotForm = z.infer<typeof schema>;
  const router = useRouter();

  const schema = z.object({
    email: z.email("Invalid email"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotForm) => {
    try {
      const storedData = await AsyncStorage.getItem("signupForm");
      if (!storedData) {
        console.log("No AsyncStorage data found.");
        return;
      }

      const forgotData = JSON.parse(storedData);

      if (
        forgotData.email == data.email
      ) {
        console.log(`Email matched \n Sending OTP to ${forgotData}`);
        router.push("/signin");
      } else {
        console.log(`Email didnt match. \n Enter your Email`);
      }
    } catch (error) {
      console.error("Failed to read AsyncStorage:", error);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
      }}
    >
      <Stack.Screen
        options={{
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "700",
          },
          headerShadowVisible: false, // Removes bottom border/shadow
          headerTitleAlign: "center",
        }}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 600}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Top */}
          <View
            style={{
              flex: 1,
            }}
          >
            {/* Main */}
            <View style={{ gap: 35 }}>
              {/* Header Texts */}
              <View style={{ gap: 12 }}>
                <AppText
                  variant="bold"
                  size="m"
                  color="textDark"
                  style={{ textAlign: "left", fontWeight: "700" }}
                >
                  Forgot Password
                </AppText>
                <AppText
                  variant="medium"
                  size="s"
                  color="textLight"
                  style={{ textAlign: "left", fontWeight: "400" }}
                >
                  We’ll send you a verification code right away {"\n"}
                  to validate your email.
                </AppText>
              </View>

              {/* Form Fields */}
              <View style={{ gap: 18 }}>
                <InputField
                  control={control}
                  name="email"
                  placeholder="Email Address"
                />
              </View>
            </View>
            {/* Footer */}
            <View
              style={[
                styles.footer,
                {
                  justifyContent: "center",
                  alignItems: "flex-start",
                  width: "100%",
                  marginTop: 18,
                },
              ]}
            >
              {/* Sign up Button */}
              <Button
                title="Send verification code"
                variant="primary"
                onPress={() => handleSubmit(onSubmit)()}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
