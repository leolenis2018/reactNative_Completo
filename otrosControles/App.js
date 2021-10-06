import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Picker,
  Switch,
  CheckBox,
  ImageBackground,
} from "react-native";

// Estas son variables globales...
const mi_Image = {
  uri: " https://as01.epimg.net/masdeporte/imagenes/2021/01/08/nfl/1610095571_401143_1610095801_noticia_normal_recorte1.jpg",
};

export default function App() {
  const [isEnabled, setisEnabled] = useState(false);
  const [valSwitch, setvalSwitch] = useState(0);
  const [programa, setPrograma] = useState(" ");
  const [salarioMinimo, setsalarioMinimo]= useState(500000)
  // Aqui ponemos el metodo que cambia el valor de la variable isEnabled
  const altSwitch = () => {
    setisEnabled((anterior) => !anterior);
    if (isEnabled) {
      setvalSwitch(0);
    } else {
      setvalSwitch(1);
    }
  };
  return (
    <View style={styles.container}>
      {/* <View style={{ flexDirection: "row" }}> Poner imagen en fila */}
      {/* FlexWrap: Es para que sea responsive. Lo que no quepa a la derecha, baje a la siguiente linea. */}
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {" "}
        <Image
          source={require("./images/Futbol_1.jpg")}
          style={{
            width: 150,
            height: 150,
            borderRadius: 10,
            borderColor: "black",
            borderWidth: 2,
            // resizeMode: "stretch",
          }}
        />
        <Image
          source={require("./images/Futbol_2.jpg")}
          style={{
            width: 150,
            height: 150,
            borderRadius: 10,
            borderColor: "black",
            borderWidth: 2,
            // resizeMode: "stretch",
            marginLeft: 5,
          }}
        />
        <Image
          source={{
            uri: "https://elcomercio.pe/resizer/4SD6VXBY-0Iq8UlNfBle_fqZtQU=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/74XZP4BKTFGWFDLHSMXOPBHGIE.jpg",
          }}
          style={{
            width: 150,
            height: 150,
            borderRadius: 10,
            borderColor: "black",
            borderWidth: 2,
            // resizeMode: "stretch",
            marginLeft: 5,
          }}
        />
        <ImageBackground
          source={{ mi_Image }}
          style={{
            width: 150,
            height: 150,
          }}
        >
          <Text style={styles.text}>Fondo</Text>
        </ImageBackground>
      </View>
      <View style={{ flexDirection: "row" }}>
        {/* El Swicth es un control que devuelve verdadero o falso */}
        <Text style={{ marginLeft: 50 }}>
          Cámara {isEnabled ? "Activada" : "Desactivada"}
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={altSwitch}
          value={isEnabled}
        ></Switch>
      </View>
      <View>
        <Text> Valor Numérico del Switch: {valSwitch}</Text>
      </View>
      <View>
        <Text>Seleccione un Programa</Text>
        <Picker
          selectedValue={programa}
          style={{ height: 30, width: 200, borderColor: "black" }}
          onValueChange={(itemValue, itemIndex) => setPrograma(itemValue)}
        >
          <Picker.Item label="Desarrollo Web" value="ds" />
          <Picker.Item label="Web Services" value="ws" />
          <Picker.Item label="Redes de Datos" value="rd" />
          <Picker />
        </Picker>
        <Text>
         Descuento: {programa == "ds" ? salarioMinimo*5 : programa == "ws" ? "20%" : "30%"}
        </Text>
      </View>
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
