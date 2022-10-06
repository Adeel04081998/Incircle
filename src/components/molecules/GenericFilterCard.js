

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";
import { initColors } from "../../res/colors";
import StoredImages from "../../res/StoredImages";
import Enums from "../../utils/Enums";
import SvgUi from "../atoms/SvgUi";
import VectorIcon from "../atoms/VectorIcon";


export default (props) => {
    return (
        <TouchableOpacity style={[styles.primaryContainerStyl, props.primaryContainerStyl]} onPress={props.onPressHandler} >
            <View style={[{ marginVertical: 5, justifyContent: 'center' }, props.imgConatinerStyl]}>
                {props.imagePath && <Image source={props.imagePath} />}
                {props.svgPath && <SvgUi uri={props.svgPath} height={50} width={50} />}
            </View>
            <View style={[styles.secondaryContainer, props.secondaryContainerStyl]}>
                <View style={[styles.centerContainerStyl, props.centerContainerStyl]}>
                    <Text style={[styles.catTitleStyl, props.catTitleStyl]} >{props.catTitle}</Text>
                    {props.catType && <Text style={[styles.catTypeStyl, props.catTypeStyl]}>{props.catType}</Text>}
                    {props.location && <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <VectorIcon name={'location'}
                            type={"EvilIcons"} color={"#F6A033"}
                            size={20}
                            style={{ alignSelf: "center", }}
                        />
                        <Text style={{ fontSize: 10, fontFamily: 'PoppinsRegular', color: 'rgba(80, 82, 82, 1)' }} >{x.location}</Text>
                        <VectorIcon name={'star'}
                            type={"FontAwesome"} color={"#F6A033"}
                            size={20}
                            style={{ alignSelf: "center", }}
                        />
                        <Text style={{ fontSize: 10, fontFamily: 'PoppinsRegular', color: 'rgba(80, 82, 82, 1)' }} >{x.rating}</Text>
                        <VectorIcon name={'circle'}
                            type={"FontAwesome"} color={"#F6A033"}
                            size={10}
                            style={{ alignSelf: "center", }}
                        />
                        <Text style={{ fontSize: 10, fontFamily: 'PoppinsRegular', color: 'rgba(80, 82, 82, 1)' }} >{x.isBusinessActive}</Text>
                    </View>
                    }
                </View>
                <View style={[styles.rightIconContainerStyl, props.rightIconContainerStyl]}>
                    <VectorIcon name={'chevron-right'}
                        type={"FontAwesome"} color={props.iconColor ?? "rgba(0, 0, 0, 1)"}
                        size={props.iconSize ?? 15}
                        style={{ alignSelf: "center", }}
                    />
                </View>
            </View>

        </TouchableOpacity>
    )

}



const styles = StyleSheet.create({
    primaryContainerStyl: {
        flexDirection: 'row', backgroundColor: initColors.greayTabBgClr, justifyContent: "space-between", marginVertical: 7, paddingHorizontal: 5, borderRadius: 20
    },
    secondaryContainer: {
        flexDirection: 'row', justifyContent: 'space-between', flex: 1,
    },
    centerContainerStyl: {
        justifyContent: 'center', alignContent: 'space-between', margin: 10, marginHorizontal: 25, flex: 1,
    },
    rightIconContainerStyl: {
        justifyContent: 'center', marginHorizontal: 10
    },
    catTitleStyl: { fontSize: 19, fontFamily: 'PoppinsSemiBold', color: initColors.secondary },
    catTypeStyl: { fontSize: 16, fontFamily: 'PoppinsRegular', color: initColors.secondary },

})
