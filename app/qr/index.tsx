import AppText from "@/components/AppText";
import { CameraView, useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import { useState } from "react";
import { Button, View } from "react-native";
import Toast from "react-native-toast-message";

export default function QRScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  const [scanned, setScanned] = useState(false);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <AppText>Camera permission is required</AppText>
        <Button title="Grant Permission" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <CameraView
      style={{ flex: 1 }}
      barcodeScannerSettings={{
        barcodeTypes: ["qr"],
      }}
      onBarcodeScanned={
        scanned
          ? undefined
          : ({ data }) => {
              setScanned(true);
              router.replace("/home");
              Toast.show({
                type: "success",
                text1: "QR reads:",
                text2: data,
              });
            }
      }
    />
  );
}
