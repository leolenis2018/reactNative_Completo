import React from "react";
import {View, Text, Image} from "react-native";

const Encabezado = (props) =>{
    return (
        <View>
            <Text>
                {props.titulo} - {props.image}
            </Text>
        </View>
    );
}

export default Encabezado;