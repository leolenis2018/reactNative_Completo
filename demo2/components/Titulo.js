import React from "react";
import { view, Text, View } from "react-native";
import Subtitulo from "./Subtitulo";

//Props: Propiedades
const Titulo = (props) => {
  return (
    <View>
      <Text>
          {props.mititulo} - {props.nombre}
          </Text>
      <Subtitulo></Subtitulo>
    </View>
  );
};

export default Titulo;
