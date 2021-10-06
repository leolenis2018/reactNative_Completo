import * as React from "react";
import react from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { BottomNavigation, Text } from "react-native-paper";
import movRoute from "./components/movRoute";

export default function App() {
  //estos son metodos
  //El otro metodo está importado
  
  
  const sesionRoute = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.options}> Email</Text>
        <TextInput style={styles.inputs}></TextInput>
        <Text style={styles.options}> Contraseña</Text>
        <TextInput style={styles.inputs}></TextInput>
      </SafeAreaView>
    );
  };

  const repRoute = () => <Text>Informes</Text>;
  const transRoute = () => <Text>Transferir Dinero</Text>;
  const provRoute = () => <Text>Proveedores</Text>;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "sesion", title: "Iniciar Sesión", icon: "login" },
    { key: "transac", title: "Transacciones", icon: "bank-transfer" },
    { key: "report", title: "Informes", icon: "history" },
    { key: "money", title: "Transferencias", icon: "cash" },
    { key: "supplier", title: "Proveedores", icon: "card-account-phone" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    sesion: sesionRoute,
    transac: movRoute,
    report: repRoute,
    money: transRoute,
    supplier: provRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex} //Este cambia el valor de las opciones que tenemos
      renderScene={renderScene}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  inputs: {
    border: "2px solid #000",
    borderRadius: 5,
    marginBottom: 15,
    color: "black",
    height: 40,
  },

  options: {
    fontFamily: "Neucha",
    color: "green",
    fontWeight: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
