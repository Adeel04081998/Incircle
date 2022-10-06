import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import svgs from "../../assets/svgs";


export default (props) => {
    return (
        <View style={[{},props.primaryContainerStyl]}>
            <SvgXml
                {...props}
                xml={props.uri ?? svgs.introIcon()}
                height={props.height ??40}
                width={props.width ?? 40}
               
            />
        </View>

    )
}