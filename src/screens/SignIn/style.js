import { StyleSheet } from 'react-native';
import { initColors } from '../../res/colors';
import constants from '../../res/constants';
export default StyleSheet.create({
    primaryContainerStyl: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 40,
        backgroundColor: initColors.white,
        // { flex: 1, margin: constants.standard_margin, paddingTop: 40 }
    },
    signInToAccntTxtStyl: {
        marginVertical: 20,
        color: initColors.black,
         fontSize: 21,
        // fontWeight:'400',
        fontFamily:'Segoe UI'
    }
});