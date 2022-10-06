import { StyleSheet } from 'react-native';
import { initColors } from '../../res/colors';
import constants from '../../res/constants';
export default StyleSheet.create({
    primaryContainerStyl: {
        flex: 1, 
        padding: constants.standard_margin,
        backgroundColor:initColors.white
    },
    secondaryContainerStyl: {
        flex: 1, marginHorizontal: 15, paddingTop: 20
    },
    detailSectionTextPrimary: {
        color: initColors.secondary, fontWeight: '400', fontSize: 27, opacity: 1
    },
    detailSectionTextSecondary: {
        color: initColors.secondary, fontWeight: '600', fontSize: 29, opacity: 1
    },
    detailSectionTextTertiary: {
        color: initColors.secondary, fontWeight: '400', fontSize: 18, opacity: 1, width: '80%',
    },


});