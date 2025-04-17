import { ActivityIndicator, View, Text, StyleSheet } from "react-native";

function Loading() {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="#555" />
      <Text>Carregando fofura...</Text>
    </View>
  );
}

export default Loading;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: "40%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
});
