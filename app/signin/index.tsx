import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosResponse } from "axios";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ActivityIndicator, Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";
import AppText from "../../components/AppText";
import styles from "../../styles/styles";

export default function SignInScreen() {
  type SignInForm = z.infer<typeof schema>;
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const axios = require("axios");

  const schema = z.object({
    username: z
      .string()
      .trim()
      .min(2, "Username is required")
      .max(100, "Username is too long"),
    password: z.string().min(7, "Minimum 7 characters"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInForm) => {
    try {
      setLoading(true);
      const credentials = {
        username: data.username,
        password: data.password,
      };
      // Wait for the asynchronous operation to finish
      const response: AxiosResponse = await axios.post(
        "https://fakestoreapi.com/auth/login",
        credentials,
      );
      await AsyncStorage.setItem("JWT token", JSON.stringify(response));

      // Runs only after the request is successful
      console.log(response.data);
      console.log("stored in AsyncStorage");

      router.replace("/home");
    } catch (error) {
      // Runs if the request fails
      console.error("Sign in Failed", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#2563EB" />
        <AppText> Please wait.... </AppText>
        <AppText> Things are getting ready </AppText>
      </View>
    );
  }

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
        <View style={{ gap: 18, marginBottom: 57, marginTop: 49 }}>
          <InputField
            control={control}
            name="username"
            placeholder="Username"
          />
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
