import React from "react";
import {View, Text} from "react-native";

const Pie = (props) => {
    return (
        <View>
            <Text>
                {props.direccion} - {props.telefono}
            </Text>
        </View>
    );
}

export default Pie;