import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { theme } from "@/constants/theme";
import { AppText } from "./AppText";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: keyof typeof theme.buttonVariants;
}

export default function Button({
  title,
  variant = "primary",
  style,
  ...props
}: ButtonProps) {
  const selectedVariant = theme.buttonVariants[variant];

  return (
    <TouchableOpacity
      style={[
        {
          borderRadius: 15,
          paddingVertical: 16,
          paddingHorizontal: 8,
          alignItems: "center",
          justifyContent: "center",
        },
        selectedVariant.container,
        style,
      ]}
      {...props}
    >
      <AppText
        size="m"
        variant="medium"
        style={[
          { textAlign: "center" },
          selectedVariant.text,
        ]}
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
}