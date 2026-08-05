import {View} from 'react-native';
import AppText from '@/components/AppText';

interface PasswordRequirementProps {
  satisfied: boolean;
  text: string;
}

export default function PasswordRequirement({
  satisfied,
  text,
}: PasswordRequirementProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
      }}
    >
      <View
        style={{
          width: 13,
          height: 13,
          borderRadius: 9,
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: satisfied ? "#0E9384" : "#D9D9D9",
          borderColor: satisfied ? "#0E9384" : "#D9D9D9",
        }}
      />

      <AppText variant='regular' size='s' color="textLight" style={{fontWeight:400}}>{text}</AppText>
    </View>
  );
}