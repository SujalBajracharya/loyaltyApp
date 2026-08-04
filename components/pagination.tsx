import { View, StyleSheet } from "react-native";

type Props = {
  activeIndex: number;
  total: number;
};

export default function Pagination({
  activeIndex,
  total,
}: Props) {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === activeIndex && styles.active,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 8,
    },

    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: "#D4D4D4",
    },

    active: {
      backgroundColor: "#159A8D",
    },
  });