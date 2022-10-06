

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";
import { SvgUri } from "react-native-svg";
import { initColors } from "../../res/colors";
import StoredImages from "../../res/StoredImages";
import Enums from "../../utils/Enums";
import SvgUi from "../atoms/SvgUi";
import VectorIcon from "../atoms/VectorIcon";


export default ({ tabArr = Enums.CATEGORIES_TYPES }) => {
    return (
        tabArr.map((x, i) => {
            return (
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgba(227, 229, 234, 1)', marginVertical: 10, borderRadius: 20, paddingVertical: 20, }} key={`${i}`}>
                    <View style={{ flexDirection: 'row', alignContent: 'space-between', alignItems: 'center', flex: 2, justifyContent: 'space-between', marginHorizontal: 15 }}>
                        <SvgUi uri={x.icon} />
                        <Text style={{ color: initColors.secondary, width: '70%', fontFamily: 'PoppinsRegular', fontSize: 16 }}>{x.text}</Text>
                    </View>

                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row', right: 20 }}>
                        <VectorIcon name={'chevron-right'}
                            type={"FontAwesome"} color={"rgba(0, 0, 0, 1)"}
                            size={15}
                            style={{ alignSelf: "center", }}
                        />
                    </View>
                </TouchableOpacity>
            )
        })
    )

}



const styles = StyleSheet.create({
    primaryContainerStyl: {
        flexDirection: 'row', justifyContent: 'space-between',
        borderColor: 'rgba(112, 112, 112, 0.12)',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        marginHorizontal: 20,
        paddingHorizontal: 3,
        marginVertical: 10


    },


})
