import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { initColors } from '../../res/colors';
import VectorIcon from './VectorIcon';

const Button = ({ primaryContainer = {}, textStyle = {}, text = 'incircle', leftBtnIcon = false, rightBtnIcon = true, onPress = () => { }, iconName = "close", iconType = "AntDesign", iconColor = "black", iconSize = 20, iconStyl = {}, iconOnPress = () => { }, isloading = false, renderLeftBtn = () => [] }) => {
    return (
        <TouchableOpacity style={[styles.primaryContainerStyl, primaryContainer]}
            onPress={onPress}
        >
            {renderLeftBtn() ?
                renderLeftBtn()
                : leftBtnIcon ? <VectorIcon name={iconName} type={iconType} color={iconColor} size={iconSize}
                    style={iconStyl}
                    onPress={iconOnPress}

                /> : null}

            {
                isloading ?
                    <ActivityIndicator style={{ textAlign: 'center', alignSelf: 'center', }}
                        color={'white'}
                        size={30}
                    />

                    :
                    <Text style={[styles.textStyle, textStyle]}>{text}</Text>

            }





            {rightBtnIcon && <VectorIcon name={iconName} type={iconType} color={iconColor} size={iconSize}
                style={iconStyl}
                onPress={iconOnPress}

            />}

        </TouchableOpacity>
    );
};

export default Button;


const styles = StyleSheet.create({
    primaryContainerStyl: {
        width: '60%', overflow: 'hidden', height: 55, borderRadius: 10, backgroundColor: initColors.primary, justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center'
    },
    secondaryContainerStyl: {
        flex: 1, marginHorizontal: 15, paddingTop: 20
    },
    textStyle: {
        color: initColors.white, textAlign: 'center', alignSelf: 'center', fontSize: 21, 
        fontWeight: '600',
        fontFamily:'Segoe UI Bold Italic'
    }
})