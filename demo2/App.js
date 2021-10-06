import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Titulo from "./components/Titulo";
//import Subtitulo from "./components/Subtitulo";

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo mititulo="Sistema de Facturacion" nombre="Leonardo S.A"/>
      {/*<Subtitulo />*/}
      <Text>Demostracion de Componentes ReactNative</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
