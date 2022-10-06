import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef, useEffect } from "react";
import { View, FlatList, Dimensions, Alert, ActivityIndicator } from "react-native"
import GenericCategoriesCard from "../../../components/molecules/GenericCategoriesCard";
import ActivityIndicatorLoader from "../../../components/organisms/ActivityIndicatorLoader";
import { getRequest } from "../../../manager/ApiManager";
import Endpoints from "../../../manager/Endpoints";
import ROUTES from "../../../navigations/ROUTES";
import Toast from "../../../components/atoms/ToastMessage"

const WINDOW_WIDTH = Dimensions.get('window').width;
const cardWidth = WINDOW_WIDTH * 0.31;
const cardHeight = WINDOW_WIDTH * 0.1;


export default () => {
  const nav = useNavigation()
  let initialState = {
    "activeTab": 0,
    incircleCategories: []
  }
  const [state, setState] = useState(initialState)

  const getIncircleCategories = () => {
    getRequest(Endpoints.GETINCIRCLEBUSINESS_CATEGORIES, (res) => {
      setState((pre) => ({ ...pre, incircleCategories: res?.data?.response }))
    }, (err) => {
      console.log("err==>", err);
      Toast.error("Network Error")
    })
  }

  useEffect(() => {
    getIncircleCategories()

  }, []);


  const categoryPressHandler = (item) => { nav.navigate(ROUTES.TAB_ROUTES.SubCategories.screen_name, { categoryiItem: item }) }
  console.log("[]state", state);
  if (state.incircleCategories.length) {

    return (
      <>
        <FlatList
          style={{ marginHorizontal: 3, }}
          contentContainerStyle={{}}
          columnWrapperStyle={{ alignItems: "center", marginHorizontal: 0, paddingHorizontal: 0, }}
          data={state.incircleCategories}
          numColumns={3}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({ item, index }) => {
            return (
              <View style={{ marginVertical: 5, }}>
                <GenericCategoriesCard
                  categoryname={item.categoryname}
                  imageIcon={item.imageIcon}
                  onPressHandler={() => categoryPressHandler(item)}
                  svgUrl={item.imageIcon}
                />
              </View>
            )
          }}

        />
      </>
    )
  }
  else {
    return (
      <ActivityIndicatorLoader />
    )
  }

}