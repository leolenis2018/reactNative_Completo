import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Picker,
  Switch,
  CheckBox,
  ImageBackground,
} from "react-native";

export default function App() {
  const [identificacion, setIdentificacion] = useState();
  const [nombre, setNombre] = useState();
  const [destino, setDestino] = useState();
  const [numeroPersonas, setNumeroPersonas] = useState();
  const [numeroDias, setNumeroDias] = useState();
  const [adicionales, setAdicionales] = useState();
  const [totalPagar, setTotalPagar] = useState();
  const [destino, setDestino] = useState();

  const calcular = () => {
    if (identificacion == "") {
      alert("Ingresar número de Identificación");
    } else if (nombre == "") {
      alert("Ingresar Nombre");
    } else if(adicionales = "Barco" ){
      100000 * numeroPersonas
    } else if(adicionales= "Discoteca"){
      120000 * numeroPersonas
    }

    switch (destino) {
      case "Cartagena":
        setTotalPagar (300000 * numeroPersonas * numeroDias);
        break;

      case "San Andrés":
        setTotalPagar ()
        break;

      case "Santa Marta":
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AGENCIA TURISMO</Text>
      <View>
        {/* <Text style={styles.text}>IDENTIFICACION</Text> */}
        <TextInput
          style={styles.inputs}
          placeholder="Identificacion"
        ></TextInput>

        {/* <Text style={styles.text}>NOMBRE</Text> */}
        <TextInput style={styles.inputs} placeholder="Nombre"></TextInput>

        <Text style={styles.text}>SELECCIONE UN DESTINO</Text>
        <Picker style={styles.inputsPicker}>
          <Picker.Item label="CARTAGENA" value="Cartagena" />
          <Picker.Item label="SAN ANDRÉS" value="San Andrés" />
          <Picker.Item label="SANTA MARTA" value="Santa Marta" />
        </Picker>

        {/* <Text style={styles.text}>NUMERO PERSONAS</Text> */}
        <TextInput
          style={styles.inputs}
          placeholder="Número de personas"
          onChangeText={setNumeroPersonas}
        ></TextInput>

        {/* <Text style={styles.text}>NÚMERO DE DIAS:</Text> */}
        <TextInput
          style={styles.inputs}
          placeholder="Número de días"
          onChangeText={setNumeroDias}
        ></TextInput>

        <Text style={styles.text}>ADICIONALES</Text>
        <Picker style={styles.inputsPicker}>
          <Picker.Item label="BARCO" />
          <Picker.Item label="DISCOTECA" />
        </Picker>

        {/* <Text style={styles.text}>TOTAL A PAGAR:</Text> */}
        <TextInput
          style={styles.inputs}
          placeholder="Total a pagar"
        ></TextInput>
      </View>
      <View style={styles.footer}>
        <Button
          style={styles.button}
          title="Calcular"
          onPress={calcular}
        ></Button>
        <Text>{"\n"}</Text>
        <Button style={styles.button} title="Limpiar">
          Limpiar
        </Button>
      </View>
      <StatusBar style="auto" />
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

  title: {
    fontSize: 60,
    fontWeight: 10,
    fontFamily: "Neucha",
    color: "red",
  },

  text: {
    fontFamily: "Neucha",
  },

  inputs: {
    border: "2px solid #000",
    borderRadius: 5,
    marginBottom: 15,
    color: "blue",
    height: 40,
  },

  inputsPicker: {
    border: "2px solid #000",
    borderRadius: 5,
    marginBottom: 15,
    color: "blue",
    height: 40,
  },

  button: {
    height: 50,
    width: 20,
    marginTop: 20,
  },

  footer: {
    marginTop: 40,
    display: "block",
  },

  error: {
    color: "red",
  },
});
