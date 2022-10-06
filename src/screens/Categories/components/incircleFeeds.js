import React, { useState, useRef, useEffect } from "react";
import { FlatList, Dimensions } from "react-native"
import GenericFilterCard from "../../../components/molecules/GenericFilterCard";
import StoredImages from "../../../res/StoredImages";
import Enums from "../../../utils/Enums";
const WINDOW_WIDTH = Dimensions.get('window').width;
const cardWidth = WINDOW_WIDTH * 0.31;
const cardHeight = WINDOW_WIDTH * 0.1;
export default () => {

    let initialState = {
        tabsArr: [
            { id: 1, catTitle: 'Al faisal mall', catType: "Jobs", icon: StoredImages.SliderImage },
            { id: 2, catTitle: 'Al faisal mall', catType: "Offers", icon: StoredImages.SliderImage },
            { id: 3, catTitle: 'Al faisal mall', catType: "Event", icon: StoredImages.SliderImage },
        ],
        incircleCategories: []
    }
    const [state, setState] = useState(initialState)

    return (
        <FlatList
            data={Enums.INCIRCLE_FEEDS}
            contentContainerStyle={{ marginHorizontal: 20, paddingVertical: 5 }}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({ item, index }) => {
                return (
                    <GenericFilterCard
                        catTitle={item.catTitle}
                        catType={item.catType}
                        imagePath={item.icon}
                    />

                )
            }}

        />



    )
}