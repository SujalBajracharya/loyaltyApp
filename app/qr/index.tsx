import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function QRScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  const [scanned, setScanned] = useState(false);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>Camera permission is required.</Text>
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
              console.log(data);
            }
      }
    />
  );
}
