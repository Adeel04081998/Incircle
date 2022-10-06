

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { SvgUri } from "react-native-svg";
import { initColors } from "../../res/colors";
const WINDOW_WIDTH = Dimensions.get('screen').width;
const cardWidth = WINDOW_WIDTH * 0.3;
const cardHeight = WINDOW_WIDTH * 0.3;
const cardTittleW = cardWidth * 1.01;


export default (props) => {
    return (

        <TouchableOpacity style={[styles.primaryContainerStyl, props.primaryContainerStyl]} onPress={props.onPressHandler} >
            <SvgUri
                width="50%" height="50%"
                uri={props.svgUrl ?? 'https://in-circle.com/Incircle-apis/categoryImages/icon (1).svg'}
            />
            <Text style={[styles.categoryTitleTxtStyl, props.categoryTitleTxtStyl]}>{props.categoryname}</Text>
        </TouchableOpacity >
    )
}




const styles = StyleSheet.create({
    primaryContainerStyl: {
        height: cardHeight, width: cardWidth, borderWidth: 1.5, borderRadius: 11, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 1)', borderColor: 'rgba(218, 218, 218, 1)', marginHorizontal: 5
    },
    categoryTitleTxtStyl: {
        width: cardTittleW, alignSelf: 'center', textAlign: 'center', padding: 8, textAlignVertical: 'center', fontFamily: 'PoppinsSemiBold', fontSize: 10, fontWeight: '500', color: 'rgba(80, 82, 82, 1)',
    },
    centerContainerStyl: {
        justifyContent: 'center', alignContent: 'space-between', margin: 10, marginHorizontal: 25, flex: 1,
    },
    rightIconContainerStyl: {
        justifyContent: 'center', marginHorizontal: 10
    },





})



