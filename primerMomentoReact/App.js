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
  const [valorPrestamo, setValorPrestamo] = useState();
  const [tipoPrestamo, setTipoPrestamo] = useState("");
  const [numeroCuotas, setNumeroCuotas] = useState();
  const [cuota, setCuota] = useState();
  const [deuda, setDeuda] = useState();

  let dinero = parseInt(valorPrestamo);
  let numero_Cuotas = parseInt(numeroCuotas);

  const Calcular = () => {
    if (dinero < 4000000 || dinero > 100000000) {
      alert ("El valor del préstamo debe ser entre 4.000.000 y 100.000.000");
    } else 
    if (numero_Cuotas < 12 || numero_Cuotas > 60) {
      alert("El numero de cuotas debe de estar entre 12 y 60");
    } else 
    if (tipoPrestamo != "Vivienda" && tipoPrestamo != "Educacion" && tipoPrestamo!="Automovil" && tipoPrestamo!= "Libre") {
      alert("Escoger el tipo de prestamo");
    } else {
      switch (tipoPrestamo) {
        case "Vivienda":
          setDeuda(dinero * 0.005 * numero_Cuotas + dinero);
          setCuota((dinero * 0.005 * numero_Cuotas + dinero) / numero_Cuotas);
          break;

        case "Educacion":
          setDeuda(dinero * 0.008 * numero_Cuotas + dinero);
          setCuota((dinero * 0.008 * numero_Cuotas + dinero) / numero_Cuotas);
          break;

        case "Automovil":
          setDeuda(dinero * 0.015 * numero_Cuotas + dinero);
          setCuota((dinero * 0.015 * numero_Cuotas + dinero) / numero_Cuotas);
          break;

        case "Libre":
          setDeuda(dinero * 0.02 * numero_Cuotas + dinero);
          setCuota((dinero * 0.02 * numero_Cuotas + dinero) / numero_Cuotas);
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
        <Text style={styles.options}>Valor del prestamo</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={setValorPrestamo}
          value={valorPrestamo}
        ></TextInput>

        <Text style={styles.options}>Tipo del prestamo</Text>
        <Picker
          style={styles.inputs}
          selectedValue={tipoPrestamo}
          onValueChange={(itemValue) => setTipoPrestamo(itemValue)}
        >
          <Picker.Item label="" value="" />
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
      <View
        style={styles.button}
        style={{ flexDirection: "row" }}
      >
        <Button title="Calcular" onPress={Calcular}></Button>
        <Text>{"\n"}</Text>
        <Button title="Limpiar" onPress={Limpiar}>
          Limpiar
        </Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:15,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 45,
    fontWeight: 10,
    fontFamily: "Neucha",
    color: "orange",
  },

  options: {
    fontFamily: "Neucha",
    color: "green",
    fontWeight: 10,
    fontSize: 20,
    fontWeight: "bold",
  },

  inputs: {
    border: "2px solid #000",
    borderRadius: 5,
    marginBottom: 15,
    color: "black",
    height: 40,
  },

  button: {
    height: 50,
    width: 20,
    marginTop: 20,
    marginLeft: 15,
  },

  footer: {
    marginTop: 40,
    display: "block",
  },

  error: {
    color: "red",
  },
});
