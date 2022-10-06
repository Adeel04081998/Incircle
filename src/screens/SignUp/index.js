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
import Endpoints from "../../manager/Endpoints";
import { postRequest } from "../../manager/ApiManager";
import ToastMessage from "../../components/atoms/ToastMessage";
import { useDispatch } from 'react-redux'
import ReduxActions from '../../redux/actions/index'
import SkipButton from "../../components/molecules/SkipButton";
import style from "./style";



export default ({ navigation, route }) => {


    let initialState = {
        inputsArr: [
            { id: 1, field: "name", placeholder: 'Full Name', pattern: Regex.name, validationerror: "Invalid first name", value: '', isError: false, leftIconColor: '#FF8000', leftIconSize: 20, leftIconType: 'FontAwesome', leftIconName: 'user' },
            { id: 2, field: "email", placeholder: 'Email', pattern: Regex.email, validationerror: "Invalid email address", value: '', isError: false, leftIconColor: '#FF8000', leftIconSize: 20, leftIconType: 'MaterialIcons', leftIconName: 'email' },
            { id: 3, field: "password", placeholder: 'Password', pattern: Regex.numberOnly, validationerror: "Invalid password", value: '', isError: false, leftIconColor: '#FF8000', leftIconSize: 20, leftIconType: 'FontAwesome', leftIconName: 'lock' },
        ],
        isloading: false

    }

    const [state, setState] = useState(initialState)
    const { inputsArr, isloading } = state

    const dispatch = useDispatch()

    const _onChangeHandler = (value, i) => {

        // console.log("indexxx=?>",i);

        // inputsArr[i].value = value;
        // setState((pre) => ({ ...pre, inputsArr }))

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
                            textInputStyl={{ width: '90%' }}
                            // onChangeText={(value) => {
                            //     // _onChangeHandler(value, index)
                            // }}
                            onChangeText={(value) => (_onChangeHandler(value, index))}

                            isValid={(bool) => {

                                inputsArr[index].isError = bool;

                                setState((pre) => ({ ...pre, }))
                            }}
                            // errorText={x.isError ? x.validationerror : ''}
                            isleftIcon={true}
                            leftIconName={x.leftIconName}
                            leftIconType={x.leftIconType}
                            leftIconSize={x.leftIconSize}


                        />

                    </View>
                )
            })
        )
    }

    const signUpHandler = () => {
        let obj = {}
        for (let index = 0; index < inputsArr.length; index++) {
            obj = {
                ...obj,
                [inputsArr[index].field]: inputsArr[index].value
            }
        }
        setState((pre) => ({ ...pre, isloading: true }))
        // JSON.stringify(myobject)
        postRequest(Endpoints.SIGNUP, JSON.stringify(obj), (res) => {
            let response = res.data.response
            let message = res.data.message
            console.log("resres=>>>.", res);
            // setState((pre) => ({ ...pre, isloading: false }))
            if (response === "success") {
                setState((pre) => ({ ...pre, isloading: false }))
                ToastMessage.succes(message)
                // dispatch(ReduxActions.setUserAction({ isLoggedIn: true, }))
                navigation.navigate(ROUTES.AUTH_ROUTES.ForgotPassword.screen_name)
            } else {
                setState((pre) => ({ ...pre, isloading: false }))
                ToastMessage.succes(message)
            }
        }, (err) => {
            setState((pre) => ({ ...pre, isloading: false }))
            console.log("err==>", err);

        })
    }

    return (
        <SafeAreaView style={style.primaryContainerStyl}>
            <SkipButton
                navigation={navigation}
            />
            <View style={{ alignItems: 'center' }}>
                <AppIconHeader
                    textStyl={{ fontSize: 22 }}
                />
                <Text style={style.registerNowTxtStyl}>Register Now</Text>
            </View>
            <ScrollView
                style={{ paddingVertical: 40,flex:1, }}
                contentContainerStyle={{ alignContent: 'center',  }}>
                {/* {_renderTextInputUi()} */}
                {
                    inputsArr.map((x, index) => {
                        return (
                            <View style={{ alignItems: "center", paddingVertical: 8, }} key={`${index}`}>
                                <TextInput
                                    placeholder={x.placeholder}
                                    pattern={x.pattern}
                                    mainContainerStyl={{ paddingVertical: 5, width: '85%', }}
                                    textInputStyl={{ width: '90%' }}
                                    onChangeText={(value) => {

                                        // _onChangeHandler(value,index)
                                        // Alert.alert("index",JSON.stringify(index))
                                        // Alert.alert("valuee",JSON.stringify(value))

                                        inputsArr[index].value = value;
                                        setState((pre) => ({ ...pre, inputsArr }))

                                    }}

                                    isValid={(bool) => {
                                        inputsArr[index].isError = bool;
                                        setState((pre) => ({ ...pre, inputsArr }))
                                    }}
                                    errorText={x.isError ? x.validationerror : ''}
                                    isleftIcon={true}
                                    leftIconName={x.leftIconName}
                                    leftIconType={x.leftIconType}
                                    leftIconSize={x.leftIconSize}
                                    value={x.value}

                                />

                            </View>
                        )
                    })
                }

                <View style={{ alignItems: 'center', marginVertical: 40 }}>
                    <Button
                        primaryContainer={{ width: '60%', height: 60, borderRadius: 20, }}
                        rightBtnIcon={false}
                        text={'SIGN UP'}
                        textStyle={{ fontSize: 21,  }}
                        onPress={signUpHandler}
                        isloading={isloading}
                    />
                </View>
                <TextBaseButton
                    primaryText={'Have Already member ?'}
                    secondaryText={'Sign In'}
                    secondaryOnPress={() => {
                        // NavigationService.NavigationActions.common_actions.navigate(ROUTES.AUTH_ROUTES.SignIn.screen_name, {})
                        navigation.navigate(ROUTES.AUTH_ROUTES.SignIn.screen_name, {})


                    }}
                />

            </ScrollView>


        </SafeAreaView >

    )
}