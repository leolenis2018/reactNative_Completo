import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
//Se importan todos los elementos que sean controles
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  //Definir variables de estado (componente):
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultado, setResultado] = useState("");

  //Metodos a utilizar.
  //Funcion Tipo Flecha
  /* const calcularSuma = () => {
    setResultado(parseFloat(valor1) + parseFloat(valor2));
  };

  //Funcion Anonima
  const calcularResta = function () {
    setResultado(parseFloat(valor1) - parseFloat(valor2));
  };*/

  //Una funcion para todas las operaciones.
  const calcularResultado = (operador) => {
    if (valor1 != "" && valor2 != "") {
      let mresultado = 0;
      switch (operador) {
        case "+":
          mresultado = parseFloat(valor1) + parseFloat(valor2);
          break;
        case "-":
          mresultado = parseFloat(valor1) - parseFloat(valor2);
          break;
        case "*":
          mresultado = parseFloat(valor1) * parseFloat(valor2);
          break;
        case "/":
          mresultado = parseFloat(valor1) / parseFloat(valor2);
          break;
        case "c":
          mresultado = 0;
          setValor1("");
          setValor2("");
          break;
      }
      setResultado(mresultado);
    } else alert ("Debe ingresar los dos valores");
  };

  return (
    <View style={styles.container}>
      <Text>Mi Calculadora</Text>
      <Text>{"\n"}</Text>
      <Text>Valor 1</Text>
      <TextInput
        placeholder="Ingrese valor 1"
        style={{ borderBottomWidth: 2, color: "blue", backgroundColor: "aqua" }}
        onChangeText={(valor1) => setValor1(valor1)}
        value={valor1}
      />
      <Text>{"\n"}</Text>
      <Text>Valor 2</Text>
      <TextInput
        placeholder="Ingrese valor 2"
        style={{ borderBottomWidth: 2, color: "blue", backgroundColor: "aqua" }}
        onChangeText={(valor2) => setValor2(valor2)}
        value={valor2}
      />
      <Text>{"\n"}</Text>
      <Text>Resultado</Text>
      <TextInput
        style={{ borderBottomWidth: 2, color: "blue", backgroundColor: "aqua" }}
        value={resultado}
      />
      <Text>{"\n"}</Text>
      <Button title="Sumar" onPress={() => calcularResultado("+")} />
      <Text>{"\n"}</Text>
      <Button title="Restar" onPress={() => calcularResultado("-")} />
      <Text>{"\n"}</Text>
      <Button title="Multiplicar" onPress={() => calcularResultado("*")} />
      <Text>{"\n"}</Text>
      <Button title="Dividir" onPress={() => calcularResultado("/")} />
      <Text>{"\n"}</Text>
      <Button title="Limpiar" onPress={() => calcularResultado("c")} />
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
