import React, { useState, useRef } from "react";
import { View, Text } from "react-native"
import { SafeAreaView, } from "react-native-safe-area-context";
import CustomHeader from "../../components/molecules/CustomHeader";
import GenericSlider from "../../components/molecules/GenericSlider";
import Button from "../../components/atoms/Button";
import SvgUi from '../../components/atoms/SvgUi';
import constants from "../../res/constants";
import Enums from "../../utils/Enums";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import ROUTES from "../../navigations/ROUTES";

import ReduxAction from "../../redux/actions/index"
import VectorIcon from "../../components/atoms/VectorIcon";
import { initColors } from "../../res/colors";
import GenericBtnTypeCategoryTab from "../../components/molecules/GenericBtnTypeCategoryTab";
import GenericFilterCard from "../../components/molecules/GenericFilterCard";

export default ({ navigation }) => {
    const dispatch = useDispatch();
    const CATEGORYWIDTH = constants.screen_dimensions.width * 0.9
    const CATEGORYHEIGHT = constants.screen_dimensions.height * 0.09
    const categoryPressHandler = (value) => {
        console.log("home[]", value);
        // Alert.alert("hello")
        // navigation.navigate(ROUTES.TAB_ROUTES.Home.screen_name)
        if (value.value === 1) {
            navigation.navigate(ROUTES.TAB_ROUTES.Categories.screen_name, {})
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 1)', padding: 10 }}>
            <CustomHeader
                leftOnPress={() => {
                    dispatch(ReduxAction.setUserAction({ isGuestUser: false, }))
                    navigation.navigate(ROUTES.AUTH_ROUTES.Introduction.screen_name, {})
                }}
                iFinalDestination={true}
                isRightIcon={true}
            />
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <GenericSlider horizontalScrool={true} />
                <View style={{ marginHorizontal: 10, marginVertical: -10, paddingVertical: 5, }}>
                    <Text style={{ fontSize: 18, color: 'rgba(112, 112, 112, 1)', fontFamily: 'PoppinsMedium', marginVertical: 5, fontWeight: '600' }}>Incircle Services</Text>
                    {[...Enums.CATEGORIES_TYPES].map((x, i) => {
                        return (
                            <GenericFilterCard
                                key={`${i}`}
                                catTitle={x.text}
                                svgPath={x.icon}
                                catTitleStyl={{ fontFamily: "PoppinsRegular", fontWeight: '600', fontSize: 16, color: 'rgba(80, 82, 82, 1)', opacity: 1, textAlignVertical: 'center', textAlignVertical: 'center', backgroundColor: 'rgba(228, 229, 234, 1)' }}
                                primaryContainerStyl={{ paddingVertical: 10, paddingHorizontal: 10, backgroundColor: 'rgba(228, 229, 234, 1)' }}
                                onPressHandler={() => categoryPressHandler(x)}
                                iconSize={14}

                            />
                        )
                    })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}