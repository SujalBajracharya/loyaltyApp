import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { theme } from "@/constants/theme";
import { AppText } from "./AppText";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: keyof typeof theme.buttonVariants;
  icon?: React.ReactNode;
}

export default function Button({
  title,
  variant = "primary",
  style,
  icon,
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
          flexDirection: "row",
          width: "100%",
        },
        selectedVariant.container,
        style,
      ]}
      {...props}
    >
      {icon && <View style={{ marginRight: 8 }}>{icon}</View>}
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