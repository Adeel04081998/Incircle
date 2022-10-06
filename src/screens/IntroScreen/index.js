
import React, { useState } from 'react';
import { Alert, Dimensions, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import svgs from '../../assets/svgs';
import AnimatedView from '../../components/atoms/AnimatedView';
import Line from '../../components/atoms/Line';
import Button from '../../components/atoms/Button';
import SvgUi from '../../components/atoms/SvgUi';
import NavigationService from '../../navigations/NavigationService';
import ROUTES from '../../navigations/ROUTES';
import AppIconHeader from '../../components/molecules/AppIconHeader';
import constants from '../../res/constants';
import { useDispatch } from 'react-redux';
import ReduxAction from "../../redux/actions/index"
import styles from './styles';
import { initColors } from '../../res/colors';


const _RenderDetailSectionUi = () => {
    return (
        <>
            <Text style={styles.detailSectionTextPrimary}>Find business</Text>
            <Text style={styles.detailSectionTextSecondary}>With In your circle</Text>
            <Line
                isDashesLine={false}
                primaryContainer={{ borderBottomWidth: 1, width: '70%', borderBottomColor: initColors.blackShade, marginVertical: 10 }}
            />
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.detailSectionTextTertiary}>Finding a business is easier to do </Text>
                <Text style={[styles.detailSectionTextTertiary, { marginTop: 3 }]}>without phisically going to a store</Text>
            </View>
        </>
    )
}


const IntroScreen = ({ navigation }) => {
    const dispatch = useDispatch()


    return (
        <SafeAreaView style={styles.primaryContainerStyl}>
            <AppIconHeader />
            <AnimatedView style={styles.secondaryContainerStyl}>
                <_RenderDetailSectionUi />
                <Button
                    text={'Next'}
                    textStyle={{ fontWeight: '600' }}
                    primaryContainer={{ width: '45%', marginVertical: 10, height: 60, borderRadius: 15 }}
                    onPress={() => {
                        // dispatch(ReduxAction.setUserAction({ isLoggedIn: true }))

                        // NavigationService.NavigationActions.common_actions.navigate(ROUTES.AUTH_ROUTES.SignIn.screen_name, {})
                        navigation.navigate(ROUTES.AUTH_ROUTES.SignIn.screen_name, {})
                        // NavigationService.NavigationActions.common_actions.navigate(ROUTES.TAB_ROUTES.Home.screen_name)
                        // navigation.navigate(ROUTES.TAB_ROUTES.Home.screen_name, {})
                    }}
                    iconName={'chevron-right'}
                    iconColor={'white'}
                    iconType={'Entypo'}
                    iconSize={18}
                />
                <SvgUi
                    uri={svgs.IntroPromo_Icon()}
                    height="120%" width="80%"
                    primaryContainerStyl={{ justifyContent: 'center', alignItems: 'center',   height:'50%' }}

                />

            </AnimatedView>

        </SafeAreaView>
    );
}

export default IntroScreen;