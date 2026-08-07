import Button from "@/components/Button";
import InputField from "@/components/InputField";
import PasswordRequirement from "@/components/PasswordRequirement";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Stack, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";
import AppText from "../../components/AppText";
import styles from "../../styles/styles";

export default function SignupProcessScreen() {
  type SignupForm = z.infer<typeof schema>;

  const router = useRouter();

  const schema = z.object({
    email: z.email("Invalid email"),
    password: z.string().min(8, "Minimum 8 characters"),
    fullName: z
      .string()
      .trim()
      .min(2, "Full name is required")
      .max(100, "Full name is too long"),
    address: z.string().trim().min(5, "Address is required"),
    contact: z
      .string()
      .regex(/^[0-9]{10}$/, "Contact number must be 10 digits"),
  });

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      address: "",
      contact: "",
    },
  });

  const password = watch("password");

  const passwordChecks = {
    length: password.length >= 8,
    symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    number: /\d/.test(password),
  };

  const onSubmit = async (data: SignupForm) => {
    try {
      const user = {
        email: data.email,
        username: data.fullName,
        password: data.password,
      };
      const response = await axios.post("https://fakestoreapi.com/users", user);

      console.log("user saved on id: " + response.data.id);
      router.push("/signup/allSet");
    } catch (error) {
      console.error("Failed to save User", error);
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
                  Provide a brief personal overview
                </AppText>
                <AppText
                  variant="medium"
                  size="s"
                  color="textLight"
                  style={{ textAlign: "left", fontWeight: "400" }}
                >
                  Provide a few more details about yourself so we{"\n"}can
                  better personalize your experience.
                </AppText>
              </View>

              {/* Form Fields */}
              <View style={{ gap: 18 }}>
                <InputField
                  control={control}
                  name="email"
                  placeholder="Email"
                  keyboardType="email-address"
                />

                <InputField
                  control={control}
                  name="fullName"
                  placeholder="Full Name"
                />
                <InputField
                  control={control}
                  name="address"
                  placeholder="Address"
                />
                <InputField
                  control={control}
                  name="contact"
                  keyboardType="number-pad"
                  placeholder="Contact"
                />
                <InputField
                  control={control}
                  name="password"
                  placeholder="Password"
                  secureTextEntry
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
              {/* Conditions */}
              <View
                style={{ gap: 8, alignItems: "flex-start", paddingBottom: 50 }}
              >
                <PasswordRequirement
                  satisfied={passwordChecks.length}
                  text="Minimum 8 characters"
                />

                <PasswordRequirement
                  satisfied={passwordChecks.symbol}
                  text="At least one symbol"
                />

                <PasswordRequirement
                  satisfied={passwordChecks.number}
                  text="At least one number"
                />
              </View>

              {/* Sign up Button */}
              <Button
                title="Continue"
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
