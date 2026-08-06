import { theme } from "@/constants/theme";
import { Text, TextProps } from "react-native";

interface AppTextProps extends TextProps {
  variant?: "regular" | "medium" | "bold";
  size?: "l" | "m" | "s";
  color?: "primary" | "textDark" | "textLight" | "background";
  weight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "normal"
    | "bold";
}

export function AppText({
  variant = "regular",
  size = "m",
  color = "textDark",
  weight = "400",
  style,
  ...props
}: AppTextProps) {
  return (
    <Text
      style={[
        {
          fontFamily: theme.fonts[variant],
          fontSize: theme.sizes[size],
          color: theme.colors[color],
          fontWeight: weight,
        },
        style,
      ]}
      {...props}
    />
  );
}

export default AppText;
