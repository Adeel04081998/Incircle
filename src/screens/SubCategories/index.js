import React, { useState, useRef, useEffect } from "react";
import { View, Appearance, Keyboard, Platform, Alert, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import VectorIcon from "../../components/atoms/VectorIcon";
import CustomHeader from "../../components/molecules/CustomHeader";
import CustomTabs from "../../components/molecules/CustomTabs";
import GenericCategoriesCard from "../../components/molecules/GenericCategoriesCard";
import { getRequest } from "../../manager/ApiManager";
import Endpoints from "../../manager/Endpoints";
import { initColors } from "../../res/colors";

const WINDOW_WIDTH = Dimensions.get('window').width;
const cardWidth = WINDOW_WIDTH * 0.31;
const cardHeight = WINDOW_WIDTH * 0.1;
export default ({ navigation, route }) => {
    let initialState = {
        "activeTab": 0,
        incircleSubCategories: []
    }
    const [state, setState] = useState(initialState)
    const cat_id = route.params?.categoryiItem?.categoryid ?? ''

    const getIncircleSubCategories = () => {
        getRequest(`findsubcategoriesofMaincategory.php?categoryid=${cat_id}`, (res) => {
            console.log("res===>", res);
            console.log("res?.response", res?.data?.response);
            setState((pre) => ({
                ...pre,
                incircleSubCategories: res?.data
            }))
        }, (err) => {
            console.log("err==>", err);
        })
    }

    useEffect(() => {
        getIncircleSubCategories()
    }, []);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: initColors.white, padding: 0 }}>
            <CustomHeader mainContainerStyl={{ marginVertical: 10, marginHorizontal: 10 }}
                isCenterTittle={true}
                centerTittle={'INCIRCLE SUBCATEGORIES'}
                isRightIcon
            />

            <FlatList
                style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}
                contentContainerStyle={{}}
                data={state.incircleSubCategories}
                ItemSeparatorComponent={(() => (<View style={[{ borderWidth: 0.7, borderColor: 'rgba(214, 214, 214, 1)' }]} />))}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 15, justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
                            <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between', alignContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: '#FF9429' }} />
                                <Text style={{ color: 'rgba(80, 82, 82, 0.9)', fontFamily: 'PoppinsRegular', width: '100%', marginHorizontal: 10, fontSize: 16, fontWeight: '600' }}>{item.subcategoryname}</Text>
                            </View>
                            <View style={{ flexDirection: "row", flex: 0.5, justifyContent: 'flex-end', alignContent: 'center', alignItems: 'center' }}>
                                <VectorIcon name={'chevron-right'}
                                    type={"FontAwesome"} color={"rgba(0, 0, 0, 1)"}
                                    size={14}
                                    style={{ alignSelf: "center", }}
                                />
                            </View>

                        </View>
                    )
                }}


            />

        </SafeAreaView>

    )
}