import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type ErrorMessageProps = {
  errorData: string;
};

export default function ErrorMessage({ errorData }: ErrorMessageProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{errorData}</Text>
      <Image
        source={require("../assets/images/cat-error.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  errorText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
    marginBottom: 10,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 16,
    resizeMode: "cover",
  },
});
