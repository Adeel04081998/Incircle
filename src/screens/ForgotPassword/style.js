import { StyleSheet } from 'react-native';
import { initColors } from '../../res/colors';
import constants from '../../res/constants';
export default StyleSheet.create({
    primaryContainerStyl: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 40,
        backgroundColor: initColors.white,
        justifyContent: 'center', 
        // bottom: 90
    },
    signInToAccntTxtStyl: {
        marginVertical: 20, color: initColors.black, fontSize: 21, fontWeight: '400',

    },
    secondaryContainerStyl: {
        alignItems: 'center', marginTop: 40, marginBottom: 0
    },
   forgotpaswrdTxtStyl: {
        marginVertical: 10, 
        color: initColors.black,
        fontSize: 21,
        fontFamily:'Segoe UI'
    }


});