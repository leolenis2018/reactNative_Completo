import React from "react";
import {View, Text} from "react-native";

const Cuerpo = (props) => {
    return (
        <View>
            <Text>
                {props.textoUno} - {props.textoDos}
            </Text>
        </View>
    );
}

export default Cuerpo;