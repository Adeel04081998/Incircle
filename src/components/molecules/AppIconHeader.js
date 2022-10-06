import React from "react";
import { View, Text, StyleSheet } from "react-native";
import svgs from "../../assets/svgs";
import SvgUi from "../atoms/SvgUi";
import { initColors } from "../../res/colors";


export default ({ primaryContainerStyl = {}, textStyl = {} }) => {
    return (
        <View style={[styles.primaryContainerStyl, primaryContainerStyl]}>
            <SvgUi
                uri={svgs.introIcon()}
                height={40}
                width={40}
            />
            <Text style={[styles.textStyl, textStyl,]}>INCIRCLE</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    primaryContainerStyl: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'center',
        alignContent: 'center',
        //  borderWidth:1
    },
    textStyl: {
        paddingHorizontal: 15,
        fontSize: 22,
        color: initColors.secondary,
        fontFamily: 'PoppinsRegular',

    }
})