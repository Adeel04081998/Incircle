import React from 'react'
import { TouchableOpacity, View, Text, Alert, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import ROUTES from '../../navigations/ROUTES';
import ReduxActions from '../../redux/actions/index'


export default ({ mainContainerStyl = {} ,navigation={}}) => {
    const dispatch = useDispatch();

    const onSkipHandler = () => {
        // Alert.alert("hy")
        // useDispatch(ReduxActio.setUserAction({ isGuestUser: true, }))
        dispatch(ReduxActions.setUserAction({ isGuestUser: true, }))

        navigation.navigate(ROUTES.TAB_ROUTES.Home.screen_name)

    }

    return (
        <TouchableOpacity style={[styles.mainContainerStyl, mainContainerStyl]}
            onPress={onSkipHandler} >
            <Text style={{ fontSize: 18, color: 'rgba(80, 82, 82, 1)',fontFamily:"PoppinsRegular" }}>Skip</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    mainContainerStyl: {
        alignSelf: "flex-end", alignItems: 'flex-end', bottom: 20, right: 15, width: '20%'
    },



});