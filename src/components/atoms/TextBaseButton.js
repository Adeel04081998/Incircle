import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { initColors } from "../../res/colors";


export default (props) => {
    return (
        <View style={[styles.mainContainerStyl, props.mainContainerStyl]}>
            <Text style={[styles.primaryTextStyl, props.primaryTextStyl]} onPress={props.primaryOnPress} >{props.primaryText}</Text>
            <Text style={[styles.secondaryTextStyl, props.secondaryTextStyl]} onPress={props.secondaryOnPress} >{props.secondaryText}</Text>

        </View>
    )
}



const styles = StyleSheet.create({
    mainContainerStyl: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    primaryTextStyl: {

        color: initColors.black,
        fontFamily: 'Segoe UI Bold',
        fontSize: 17,
    },
    secondaryTextStyl: {
        marginLeft: 5,
        color: initColors.black,
        fontFamily: 'Segoe UI Bold',
        fontSize: 17,
        
    }

});