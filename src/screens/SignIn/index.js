import React, { useState, useRef } from "react";
import { View, Appearance, Keyboard, Platform, Alert, Text } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInput from "../../components/atoms/TextInput";
import AppIconHeader from '../../components/molecules/AppIconHeader';
import constants from '../../res/constants';
import Regex from "../../utils/Regex";
import Button from "../../components/atoms/Button"
import TextBaseButton from "../../components/atoms/TextBaseButton";
import NavigationService from "../../navigations/NavigationService";
import ROUTES from "../../navigations/ROUTES";
import { postRequest } from "../../manager/ApiManager"
import Endpoints from "../../manager/Endpoints";
import ToastMessage from "../../components/atoms/ToastMessage";
import { useDispatch } from "react-redux";
import ReduxAction from "../../redux/actions/index"
import style from "./style";
import SkipButton from "../../components/molecules/SkipButton";




export default ({ navigation }) => {
    let initialState = {
        inputsArr: [
            { id: 1, field: "email", placeholder: 'Email', pattern: Regex.email, validationerror: "Invalid email address", value: '', isError: false, leftIconColor: '#FF8000', leftIconSize: 20, leftIconType: 'MaterialIcons', leftIconName: 'email' },
            { id: 2, field: "password", placeholder: 'Password', pattern: Regex.numberOnly, validationerror: "Invalid password", value: '', isError: false, leftIconColor: '#FF8000', leftIconSize: 20, leftIconType: 'FontAwesome', leftIconName: 'lock' },
        ],
        isloading: false

    }

    const [state, setState] = useState(initialState)
    const { inputsArr } = state
    const dispatch = useDispatch()

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
                            mainContainerStyl={{ paddingVertical: 5, width: '85%', }}
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
                            // leftIconColor={x.leftIconColor}
                            leftIconType={x.leftIconType}
                            leftIconSize={x.leftIconSize}
                        />

                    </View>
                )
            })
        )
    }
    const loginHandler = () => {
        let obj = {}
        for (let index = 0; index < inputsArr.length; index++) {
            obj = {
                ...obj,
                [inputsArr[index].field]: inputsArr[index].value
            }
        }
        setState((pre) => ({
            ...pre,
            isloading: true
        }))
        console.log("obj==>", obj);

        postRequest(Endpoints.LOGIN, JSON.stringify(obj), (res) => {
            // console.log("res==>", res);
            let response = res.data.response
            let message = res.data.message
            if (response === "success") {
                setState((pre) => ({ ...pre, isloading: false }))
                ToastMessage.succes(message)
                dispatch(ReduxAction.setUserAction({ isLoggedIn: true }))
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



    return (
        <SafeAreaView style={style.primaryContainerStyl}>
            <SkipButton
                navigation={navigation} />
            <View style={{ alignItems: 'center' }}>
                <AppIconHeader />
                <Text style={style.signInToAccntTxtStyl}>Sign into your account</Text>
            </View>
            <ScrollView
                style={{ paddingVertical: 50, }}
                contentContainerStyle={{ alignContent: 'center', }}  >
                {_renderTextInputUi()}
                <TextBaseButton
                    primaryText={"Forget Password ?"}
                    mainContainerStyl={{ justifyContent: 'flex-end', right: 20, marginTop: 20 }}
                    primaryOnPress={() => {
                        navigation.navigate(ROUTES.AUTH_ROUTES.ForgotPassword.screen_name, {})
                    }}
                />

                <View style={{ alignItems: 'center', marginVertical: 40 }}>
                    <Button
                        primaryContainer={{ width: '60%', height: 60, borderRadius: 20, }}
                        rightBtnIcon={false}
                        text={'SIGN IN'}
                        textStyle={{ fontSize: 21, fontWeight: '500' }}
                        onPress={loginHandler}
                    />
                </View>


                <TextBaseButton
                    primaryText={"If You Don't Have Account"}
                    secondaryText={'Signup ?'}
                    secondaryOnPress={() => {
                        navigation.navigate(ROUTES.AUTH_ROUTES.SignUp.screen_name, {})
                    }}

                />

            </ScrollView>


        </SafeAreaView >

    )
}