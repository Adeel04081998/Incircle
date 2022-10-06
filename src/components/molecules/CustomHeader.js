import React from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import VectorIcon from "../atoms/VectorIcon";
import SvgUi from '../../components/atoms/SvgUi';
import svgs from "../../assets/svgs";
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";


export default ({ centerTittle = 'Incircle', rightIconSvg = svgs.Notificaion_BellIcon(), isCenterTittle = false, iFinalDestination = false, isRightIcon = false, finalDestinationPress = () => { }, leftOnPress = () => { }, rightOnPress = () => { }, mainContainerStyl = {} }) => {
    const nav = useNavigation()
    const backPressHandler = () => {
        // Alert.alert("back")
        nav.goBack()

    }

    return (
        <View style={[styles.mainContainerStyl, mainContainerStyl]}>
            <View>
                {iFinalDestination ?
                    <TouchableOpacity style={{ justifyContent: 'center', height: 40, }} onPress={finalDestinationPress} >
                        <SvgXml xml={svgs.PinLocationIcon()} />
                    </TouchableOpacity >
                    : <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', }} onPress={backPressHandler} >
                        <VectorIcon name={'chevron-left'}
                            type={"FontAwesome"} color={"rgba(112, 112, 112, 1)"}
                            size={20}
                            style={{ alignSelf: "center", }}
                        />
                        <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 16, color: 'rgba(112, 112, 112, 1)', alignItems: 'center', alignSelf: 'center', textAlign: 'center' }}>back</Text>
                    </TouchableOpacity >
                }

            </View>

            {
                isCenterTittle ?
                    <TouchableOpacity style={{ alignSelf: 'center', borderWidth: 1, }} >
                        <Text style={{ color: 'rgba(0, 0, 0, 1)', fontFamily: "PoppinsMedium", fontSize: 16 }}>{centerTittle}</Text>
                    </TouchableOpacity>
                    : <View />
            }


            {
                isRightIcon ?
                    <TouchableOpacity style={{ justifyContent: 'center', }} onPress={rightOnPress} >
                        <SvgUi
                            uri={rightIconSvg}
                            height={40} width={40}
                        />

                    </TouchableOpacity >
                    : <View />

            }





        </View>
    )

}

const styles = StyleSheet.create({
    mainContainerStyl: {
        // width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        justifyContent: 'space-between', flexDirection: 'row',
        marginHorizontal: 8,
        // flex:1,
        borderWidth: 1,
        alignContent: 'center', alignItems: 'center',
    },
    textInputStyl: {
        paddingVertical: 10, width: '100%', marginHorizontal: 10
    }

});
