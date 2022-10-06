import React from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet, Dimensions, Image } from "react-native";
import { BorderlessButton, FlatList } from "react-native-gesture-handler";
import StoredImages from "../../res/StoredImages";
import VectorIcon from "../atoms/VectorIcon";

export default ({ data = [], horizontalScrool = false, verticalScrool = false, mainImageStyl = {}, isServerPic = false, imageHeight = 150 }) => {

    const { width } = Dimensions.get('window');

    const ITEM_WIDTH = width * 0.9;
    const ITEM_HEIGHT = 250;
    const BORDER_RADIUS = 8;

    const FlightBrandData = [
        {
            id: '1',
            name: 'United State',
            value: 'USA',
            image: '',
        },
        { id: '2', name: 'Singapore', value: 'SIN', image: '' },
        { id: '3', name: 'Sydney', value: 'SYN', image: '' },
    ];
    
    return (
        <View style={{ marginVertical: 20, }}>
            <FlatList
                data={FlightBrandData}
                horizontal={horizontalScrool}
                vertical={verticalScrool}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index, }) => {
                    return (
                        <TouchableOpacity activeOpacity={0.8} key={index} style={{ height: ITEM_HEIGHT, width: ITEM_WIDTH, marginHorizontal: 10, }} >
                            <View style={[styles.secondaryContainer, {
                                width: ITEM_WIDTH,
                                height: ITEM_HEIGHT,
                                // margin: 10
                            }]}>
                                <Image
                                    // source={{
                                    //     uri: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'
                                    // }}
                                    source={StoredImages.SliderImage}

                                    style={[styles.image, {
                                        height: ITEM_HEIGHT,
                                        width: '100%',
                                        borderRadius: 5

                                    }, mainImageStyl]}
                                    resizeMode={'cover'}
                                // resizeMethod={'resize'}


                                />
                            </View>

                        </TouchableOpacity>
                    );
                }}
            // style={{height:90}}

            />
        </View>
    )

}

const styles = StyleSheet.create({
    mainContainerStyl: {
        width: '100%', justifyContent: 'space-between', flexDirection: 'row', padding: 10, paddingHorizontal: 5
    },

    secondaryContainer: {
        // marginHorizontal: 10,
        // alignItems: 'center',
        // backgroundColor: 'red',
        // borderRadius: 8,


    },
    image: {
        width: '100%',
        // aspectRatio: 12/ 19,
        // borderRadius: 8,
        // resizeMode: 'cover',
    },

});

