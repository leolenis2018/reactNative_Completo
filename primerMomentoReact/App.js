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
  ImageBackground, Alert
} from "react-native";

export default function App() {

  const [valorPrestamo, setValorPrestamo] = useState('');
  const [tipoPrestamo, setTipoPrestamo] = useState('Vivienda');
  const [numeroCuotas, setNumeroCuotas] = useState("");
  const [cuota, setCuota] = useState("");
  const [deuda, setDeuda] = useState("");

  const Calcular = () => {
    if (valorPrestamo < 4000000 || valorPrestamo > 100000000) {
      alert("El valor del préstamo debe ser entre 4.000.000 y 100.000.000");
    }
    if (numeroCuotas < 12 || numeroCuotas > 60) {
      alert("El numero de cuotas debe estar entre 12 y 60");
    } else {
      switch (tipoPrestamo) {
        case "Vivienda":
          setCuota(((valorPrestamo * 0.005 * numeroCuotas) + parseInt(valorPrestamo)) / numeroCuotas);
          setDeuda((valorPrestamo * 0.005 * numeroCuotas) + parseInt(valorPrestamo));
          break;

        case "Educacion":
          setCuota(((valorPrestamo * 0.008 * numeroCuotas) + parseInt(valorPrestamo)) / numeroCuotas);
          setDeuda((valorPrestamo * 0.008 * numeroCuotas) + parseInt(valorPrestamo));
          break;

        case "Automovil":
          setCuota(((valorPrestamo * 0.015 * numeroCuotas) + parseInt(valorPrestamo)) / numeroCuotas);
          setDeuda((valorPrestamo * 0.015 * numeroCuotas) + parseInt(valorPrestamo));
          break;

        case "Libre":
          setCuota(((valorPrestamo * 0.02 * numeroCuotas) + parseInt(valorPrestamo)) / numeroCuotas);
          setDeuda((valorPrestamo * 0.02 * numeroCuotas) + parseInt(valorPrestamo));
          break;
      }
    }
  };

  const Limpiar = () => {
    setValorPrestamo("");
    setTipoPrestamo("");
    setNumeroCuotas("");
    setCuota("");
    setDeuda("");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./img/bank.jpg")}
        style={{

          width: 150,
          height: 150,
          borderRadius: 10,
          borderColor: "black",
          borderWidth: 2,
          //resizeMode: "stretch",
        }}
      />

      <Text style={styles.title}> Simula tu Crédito</Text>
      <View>
        <Text style={styles.options}>Valor del préstamo</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={setValorPrestamo}
          onValueChange={(itemValue) => setValorPrestamo(itemValue)}
          value={valorPrestamo}
        ></TextInput>

        <Text style={styles.options}>Seleccione el tipo de préstamo</Text>
        <Picker
          style={styles.inputs}
          selectedValue={tipoPrestamo}
          onValueChange={(itemValue) => setTipoPrestamo(itemValue)}
        >

          <Picker.Item label="Vivienda" value="Vivienda" />
          <Picker.Item label="Educación" value="Educacion" />
          <Picker.Item label="Automóvil" value="Automovil" />
          <Picker.Item label="Libre Inversión" value="Libre" />
        </Picker>

        <Text style={styles.options}>Número de Cuotas</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={setNumeroCuotas}
          value={numeroCuotas}
        ></TextInput>

        <Text style={styles.options}>Valor cuota</Text>
        <TextInput style={styles.inputs} value={cuota}></TextInput>

        <Text style={styles.options}>Total Deuda:</Text>
        <TextInput style={styles.inputs} value={deuda}></TextInput>
      </View>

      <View style={{flexDirection: "row", marginBottom:25}}>
        <Button title= "Calcular" onPress={Calcular}/>
        <Button title= "Limpiar" onPress={Limpiar}/>

      </View>

  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  button: {

    backgroundColor: "orange"
  },

  title: {
    fontSize: 35,
    fontWeight: 10,
    fontFamily: "Neucha",
    color: "orange"
  },

  options: {
    fontFamily: "Neucha",
    color: "green",
    fontWeight: 10,
    fontSize: 20,
    fontWeight: "bold"
  },

  inputs: {
    border: "2px solid #000",
    borderRadius: 5,
    marginBottom: 15,
    color: "black",
    height: 40
  },


  footer: {
    marginTop: 40,
    display: "block"
  },

  error: {
    color: "red"
  },
});