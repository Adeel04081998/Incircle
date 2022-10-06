import React from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet, ActivityIndicator } from "react-native";
import VectorIcon from "../atoms/VectorIcon";
import SvgUi from '../../components/atoms/SvgUi';
import svgs from "../../assets/svgs";
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";


export default ({ }) => {
    const nav = useNavigation()
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <ActivityIndicator size="large" color="#0000ff"
                // style={{ height: 180 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainerStyl: {
        // width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        justifyContent: 'space-between', flexDirection: 'row',
        marginHorizontal: 8,


        alignContent: 'center', alignItems: 'center',
    },
    textInputStyl: {
        paddingVertical: 10, width: '100%', marginHorizontal: 10
    }

});
