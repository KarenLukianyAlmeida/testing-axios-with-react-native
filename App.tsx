import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  ActivityIndicator,
  Text,
} from "react-native";
import ErrorMessage from "./components/ErrorMessage";
import InfoCard from "./components/InfoCard";
import { getCatImage } from "./services/catAPI";

export default function App() {
  const [infoCat, setInfoCat] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loadingRequest, setLoadingRequest] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    setLoadingRequest(true);
    setLoadingImage(true); // reset carregamento da imagem
    setError(null);

    try {
      const imageUrl = await getCatImage();
      setInfoCat(imageUrl);
    } catch (err) {
      setError(err as string);
      setLoadingRequest(false); // em caso de erro, tira loadingRequest
      setLoadingImage(false); // e também o da imagem
    }
  };

  // Quando a imagem termina de carregar, encerramos os dois loadings
  const handleImageLoad = () => {
    setLoadingRequest(false);
    setLoadingImage(false);
  };

  return (
    <View style={styles.container}>
      {error && <ErrorMessage errorData={error} />}

      {infoCat && !error && (
        <InfoCard imageUrl={infoCat} onLoad={handleImageLoad} />
      )}

      {(loadingRequest || loadingImage) && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#555" />
          <Text>Carregando fofura...</Text>
        </View>
      )}

      <View style={styles.button}>
        <Button title="CLICK ME!" onPress={fetchImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  overlay: {
    position: "absolute",
    top: "40%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  button: {
    marginTop: 16,
    width: "80%",
    paddingVertical: 30,
  },
});
