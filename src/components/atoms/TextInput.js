import React from "react";
import { Text, View, TextInput, StyleSheet, Alert } from "react-native";
import { initColors } from "../../res/colors";
import VectorIcon from "./VectorIcon";


export default (props) => {
    return (
        <>
            <View style={[styles.mainContainerStyl, props.mainContainerStyl]}>
                {props.isleftIcon && <VectorIcon
                    name={props.leftIconName}
                    color={props.leftIconColor }
                    type={props.leftIconType}
                    size={props.leftIconSize}

                />}
                <TextInput
                    // {...props}
                    value={props.value}
                    placeholder={props.placeholder ?? "Enter Name"}
                    placeholderTextColor={props.placeholderTextColor ?? 'black'}
                    style={[styles.textInputStyl, props.textInputStyl]}
                    onChangeText={(text) => {
                        const regexp = new RegExp(props.pattern)
                        if (regexp.test(text)) {
                            console.log("hy=>>>");
                            props.onChangeText(text)
                            props.isValid(false)
                            // props.onChangeText() && props.onChangeText(text)
                            // props.isValid() && props.isValid(false)
                        } else {
                            props.onChangeText(text)
                            props.isValid(false)
                            // props.onChangeText() && props.onChangeText(text)
                            // props.isValid() && props.isValid(true)
                        }


                    }}

                />
                {props.isRightIcon && <VectorIcon
                    name={props.RightIconName}
                    color={props.RightIconColor ?? 'rgba(74, 74, 74, 1)'}
                    type={props.RightIconType}
                    size={props.RightIconSize}

                />}

            </View>
            {props.errorText && <Text style={{ justifyContent: 'center', alignSelf: 'center' }}>{props.errorText}</Text>}
        </>
    )
}

const styles = StyleSheet.create({
    mainContainerStyl: {
        width: '100%',
        borderColor: initColors.tertiary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 4,
        backgroundColor: initColors.tertiary,
        opacity: 1
    },
    textInputStyl: {
        paddingVertical: 10, width: '100%', marginHorizontal: 10, color: initColors.black, 
        fontFamily: 'Segoe UI',
        fontSize: 17
        

    }

});