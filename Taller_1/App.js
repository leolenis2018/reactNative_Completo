import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Cuerpo from "./components/cuerpo";
import Encabezado from "./components/encabezado";
import Pie from "./components/pie";

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado titulo="Moviles III" />
      <Cuerpo textoUno="React Native combina las mejores partes del desarrollo nativo con React, una biblioteca de JavaScript de primera clase para crear interfaces de usuario." />
      <Cuerpo textoDos="Puedes usar React Native hoy en tus proyectos existentes de Android e iOS o puedes crear una aplicación completamente nueva desde cero" />
      <Pie direccion="Medellín, Los Colores" telefono="3506442896" />
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
