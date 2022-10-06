import React from "react";
import { View } from "react-native";
import Toast from 'react-native-toast-message';



export default {
    succes: (textMessage = '', timeToShow = 200, position = 'top', topOffset = 40, onShow = () => { }, onPress = () => { }, autoHide = true) => {
        Toast.show({
            type: "success",
            text2: textMessage,
            position,
            timeToShow,
            autoHide,
            topOffset,
            onPress,
            onShow,

        });

    },
    info: (textMessage = '', timeToShow = 200, position = 'top', show = () => { }, onHide = () => { }, onPress = () => { }, autoHide = true) => {
        Toast.show({
            type: "info",
            text2: textMessage,
            position,
            timeToShow,
            autoHide,
            onPress,
            show,

        });

    },
    error: (textMessage = '', timeToShow = 200, position = 'top', show = () => { }, onPress = () => { }, autoHide = true) => {
        Toast.show({
            type: "error",
            text2: textMessage,
            position,
            timeToShow,
            autoHide,
            onPress,
            show,

        });

    }

}
