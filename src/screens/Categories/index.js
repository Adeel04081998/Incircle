import React, { useState, useRef, useEffect } from "react";
import { View, Appearance, Keyboard, Platform, Alert, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/molecules/CustomHeader";
import CustomTabs from "../../components/molecules/CustomTabs";
import GenericBtnTypeCategoryTab from "../../components/molecules/GenericBtnTypeCategoryTab";
import { getRequest } from "../../manager/ApiManager";
import Endpoints from "../../manager/Endpoints";
import { initColors } from "../../res/colors";
import IncircleCategories from "./components/incircleCategories";
import IncircleFeeds from "./components/incircleFeeds";


const WINDOW_WIDTH = Dimensions.get('window').width;
const cardWidth = WINDOW_WIDTH * 0.31;
const cardHeight = WINDOW_WIDTH * 0.1;
export default ({ navigation }) => {
  let initialState = {
    "activeTab": 0,
    incircleCategories: []
  }
  const [state, setState] = useState(initialState)

  const TabOnPressHandler = (index) => {
    setState((pre) => ({ ...pre, activeTab: index }))
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: initColors.white, padding: 0 }}>
      <CustomHeader mainContainerStyl={{ marginVertical: 10, marginHorizontal: 10, }} />
      <CustomTabs
        primaryContainerStyl={{ marginHorizontal: 10, borderColor: 'black' }}
        tabsArr={['INCIRCLE CATEGORIES', 'INCIRCLE FEEDS']}
        tabHandler={TabOnPressHandler}
        activeTab={state.activeTab}
      />
      {state.activeTab === 0 ? <IncircleCategories /> : <IncircleFeeds />}
    </SafeAreaView>

  )
}