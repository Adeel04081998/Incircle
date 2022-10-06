import React from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import VectorIcon from "../atoms/VectorIcon";

export default ({ isShowLeftIcon = false, isShowCenterIcon = true, isShowRightIconWithBtn = false, leftIconName = "bell", leftIconType = "FontAwesome", leftIconColor = "white", leftIconSize = 15, leftIconStyl = {}, centerBtnOnPress = () => { }, leftOnPress = () => { }, rightOnPress = () => { }, renderCenterUi = () => { }, renderRightBtnUi = () => { }, renderLeftBtnUi = () => { } }) => {


    const _RenderCenterBtnUi = (props) => {
        return (
            <TouchableOpacity style={{ flexDirection: 'row', }}
                onPress={props.onPress}
            >
                <Text>{props.text}</Text>

            </TouchableOpacity>
        )
    }

    return (
        <View style={[styles.mainContainerStyl]}>
            {


                renderLeftBtnUi() ? renderLeftBtnUi():
                isShowLeftIcon ?<View style={{ flexDirection: 'row',}}>
                <VectorIcon name={'chevron-left'} type={leftIconType} color={"black"} size={20} onPress={() => Alert.alert("Press")}
                    style={{ alignSelf: "center",}}
                />
                <_RenderCenterBtnUi
                    text='back'
                    onPress={centerBtnOnPress}
                

                />
            </View >
            :null

            }



            {renderCenterUi() ? renderCenterUi() :
                <_RenderCenterBtnUi
                    text='INCIRCLE SUBCATEGORIES'
                    onPress={centerBtnOnPress}
                />
            }

            {
                renderRightBtnUi() ? renderRightBtnUi() : isShowRightIconWithBtn ? <View style={{ flexDirection: 'row', }}>
                    <VectorIcon name={leftIconName} type={leftIconType} color={leftIconColor} size={leftIconSize} style={{ alignSelf: "center" }} />
                    <_RenderCenterBtnUi
                        text='okkkk'
                        onPress={rightOnPress}
                    />
                </View>
                    : <View style={{ width: 30, height: 30, backgroundColor: 'green', justifyContent: 'center', borderRadius: 10 }}>
                        <VectorIcon name={leftIconName} type={leftIconType} color={leftIconColor} size={leftIconSize}
                            onPress={leftOnPress}
                            style={{ alignSelf: "center" }}

                        />
                    </View>


            }

            

        </View>
    )

}

const styles = StyleSheet.create({
    mainContainerStyl: {
        width: '100%', justifyContent: 'space-between', flexDirection: 'row', padding: 10, paddingHorizontal: 5, alignContent: 'center', alignItems: 'center'
    },
    textInputStyl: {
        paddingVertical: 10, width: '100%', marginHorizontal: 10
    }

});
