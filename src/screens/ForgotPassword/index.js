import React, { useState, useRef } from "react";
import { View, Appearance, Keyboard, Platform, Alert, Text } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInput from "../../components/atoms/TextInput";
import AppIconHeader from '../../components/molecules/AppIconHeader';
import constants from '../../res/constants';
import Regex from "../../utils/Regex";
import Button from "../../components/atoms/Button"
import ROUTES from "../../navigations/ROUTES";
import style from "./style";
import { postRequest } from '../../manager/ApiManager';
import Endpoints from '../../manager/Endpoints'
import ToastMessage from "../../components/atoms/ToastMessage";
import { initColors } from "../../res/colors";


export default ({ navigation }) => {
    let initialState = {
        inputsArr: [
            { id: 1, field: "email", placeholder: 'Email', pattern: Regex.email, validationerror: "Invalid email address", value: __DEV__ ? "absbvvsb990990b@gmail.com" : '', isError: false, leftIconColor: initColors.greayShade, leftIconSize: 20, leftIconType: 'MaterialIcons', leftIconName: 'email' },

        ],

    }

    const [state, setState] = useState(initialState)
    const { inputsArr } = state

    const _onChangeHandler = (value, i) => {
        inputsArr[i].value = value;
        setState((pre) => ({ ...pre, inputsArr }))

    }

    const _renderTextInputUi = () => {
        return (
            inputsArr.map((x, index) => {
                return (
                    <View style={{ alignItems: "center", paddingVertical: 8, }} key={`${index}`}>
                        <TextInput
                            value={x.value}
                            placeholder={x.placeholder}
                            pattern={x.pattern}
                            textInputStyl={{ width: '90%' }}
                            mainContainerStyl={{ paddingVertical: 5, width: '90%', }}
                            onChangeText={(value) => {
                                _onChangeHandler(value, index)
                            }}
                            isValid={(bool) => {
                                inputsArr[index].isError = bool;
                                setState((pre) => ({ ...pre, inputsArr }))
                            }}
                            errorText={x.isError ? x.validationerror : ''}
                            isleftIcon={true}
                            leftIconName={x.leftIconName}
                            leftIconColor={x.leftIconColor}
                            leftIconType={x.leftIconType}
                            leftIconSize={x.leftIconSize}


                        />

                    </View>
                )
            })
        )
    }
    const forgetPasswordHandler = () => {
        let obj = {}
        for (let index = 0; index < inputsArr.length; index++) {
            obj = {
                ...obj,
                [inputsArr[index].field]: inputsArr[index].value
            }
        }
        console.log("obj", obj);
        setState((pre) => ({ ...pre, isloading: true }))
        postRequest(Endpoints.FORGETPASSWORD, JSON.stringify(obj), (res) => {
            console.log("res==>", res);
            let response = res.data.response
            let message = res.data.message
            if (response === "success") {
                setState((pre) => ({ ...pre, isloading: false }))
                ToastMessage.succes(message)
                dispatch(ReduxAction.setUserAction({ isLoggedIn: true }))
                // navigation.navigate(ROUTES.AUTH_ROUTES.ForgotPassword.screen_name)
                navigation.navigate(ROUTES.TAB_ROUTES.Home.screen_name)
            } else {
                setState((pre) => ({ ...pre, isloading: false }))
                ToastMessage.error(message)

            }


        }, (err) => {
            setState((pre) => ({ ...pre, isloading: false }))
            // ToastMessage.error(message)

            console.log("err==>", err);

        })


    }

    console.log("isss state=>", inputsArr);

    return (
        <SafeAreaView style={style.primaryContainerStyl}>
            <View style={{ alignItems: 'center', }}>
                <AppIconHeader
                    // textStyl={{ fontSize: 21, }}
                />

            </View>
            <View style={style.secondaryContainerStyl}>
                <Text style={style.forgotpaswrdTxtStyl}>Forgot Password</Text>
                <Text style={{
                    marginTop: 16,
                    color: 'rgba(8, 8, 8, 1)',
                    fontSize: 17,
                    fontFamily:'Segoe UI'
                   
                }}>Enter your Email address to recover account</Text>
            </View>
            <View style={{ marginVertical: 20 }} >
                {_renderTextInputUi()}


                <View style={{ alignItems: 'center', marginVertical: 40 }}>
                    <Button

                        primaryContainer={{ width: '70%', height: 60, borderRadius: 20, }}
                        rightBtnIcon={false}
                        text={'Send'}
                        onPress={forgetPasswordHandler}
                    />
                </View>



            </View>


        </SafeAreaView >

    )
}