import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

interface InputFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;

  label?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
}

export default function InputField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  secureTextEntry,
}: InputFieldProps<T>) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View style={styles.container}>
          {label && <AppText variant="medium">{label}</AppText>}

          <TextInput
            style={[styles.input, error && styles.errorInput]}
            placeholder={placeholder}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            secureTextEntry={secureTextEntry && !isPasswordVisible}
          />

          {error && (
            <AppText style={{ color: "red" }} size="s">
              {error.message}
            </AppText>
          )}
          {secureTextEntry && (
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              style={{
                position: "absolute",
                right: 16,
                top: 0,
                bottom: 0,
                justifyContent: "center",
              }}
            >
              <Ionicons
                name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
                size={22}
                color="#777"
              />
            </TouchableOpacity>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    borderColor: "#D9D9D9",
  },

  errorInput: {
    borderColor: "red",
  },
});
