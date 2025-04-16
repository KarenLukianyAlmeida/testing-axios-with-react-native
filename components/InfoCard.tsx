import React from "react";
import { Image, StyleSheet } from "react-native";

type InfoCardProps = {
  imageUrl: string;
  onLoad: () => void;
};

export default function InfoCard({ imageUrl, onLoad }: InfoCardProps) {
  return (
    <Image
      source={{ uri: imageUrl }}
      style={styles.image}
      onLoadEnd={() => {
        onLoad();
      }}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    borderRadius: 16,
    resizeMode: "cover",
  },
});
