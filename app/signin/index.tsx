import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../styles/styles";
import AppText from "../../components/AppText";
import { useRouter } from "expo-router";
import InputField from "@/components/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "@/components/Button";

export default function SignInScreen() {
  type SignInForm = z.infer<typeof schema>;
  const router = useRouter();

  const schema = z.object({
    email: z.email("Invalid email"),
    password: z.string().min(8, "Minimum 8 characters"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInForm) => {
    try {
      const storedData = await AsyncStorage.getItem("signupForm");
      if (!storedData) {
        console.log("No signup data found.");
        return;
      }

      const signupData = JSON.parse(storedData);

      if (
        signupData.email == data.email &&
        signupData.password == data.password
      ) {
        console.log(`signin completed. \n email and password matched.`);
        router.push("/signup/allSet");
      } else {
        console.log(`signin failed. \n Invalid email or password.`);
      }
    } catch (error) {
      console.error("Failed to read AsyncStorage:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top */}
      <View
        style={{
          flex: 1,
          marginTop: 10,
        }}
      >
        {/* header */}
        <View style={[{ gap: 33 }, styles.header]}>
          {/* logo */}
          <Image
            source={require("@/assets/logo.png")}
            style={{
              width: 132,
              height: 130,
              alignSelf: "center",
              marginTop: 20,
            }}
          />

          <AppText
            variant="bold"
            size="m"
            color="textDark"
            style={{ textAlign: "center", fontSize: 28, fontWeight: "600" }}
          >
            Sign In
          </AppText>
        </View>
        {/* Form Fields */}
        <View style={{ gap: 18, marginBottom: 57, marginTop: 49}}>
          <InputField control={control} name="email" placeholder="Email" />
          <InputField
            control={control}
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <TouchableOpacity
            onPress={() => router.push("../forgotPassword")}
            style={{ padding: 10 }}
          >
            <AppText
              variant="regular"
              size="s"
              color="textLight"
              style={{ textAlign: "right" }}
            >
              Forgot password ?
            </AppText>
          </TouchableOpacity>
          {/* Signin Button */}
          <Button
            title="Sign In"
            variant="primary"
            onPress={() => handleSubmit(onSubmit)()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
