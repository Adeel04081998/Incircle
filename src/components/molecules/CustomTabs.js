

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";


const WINDOW_WIDTH = Dimensions.get('window').width;
const cardWidth = WINDOW_WIDTH * 0.4;
const cardHeight = WINDOW_WIDTH * 0.1;
export default ({ primaryContainerStyl = {}, textStyl = {}, tabTittle = 'ddd', tabsArr = [], tabHandler, activeTab }) => {


  return (
    <View style={[styles.primaryContainerStyl,primaryContainerStyl]}>
      {
        tabsArr.map((x, i) => {
          return (
            <TouchableOpacity style={{ backgroundColor: activeTab === i ? 'rgba(1, 130, 252, 1)' : 'rgba(253, 253, 253, 1)', paddingVertical: 13, marginVertical: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 10, minWidth: cardWidth }} key={`${i}`} onPress={() => tabHandler(i)}>
              <Text style={{
                color: activeTab === i ? 'rgba(255, 255, 255, 1)' : 'rgba(112, 112, 112, 1)',
                paddingVertical: 3,
                fontFamily: 'PoppinsRegular',
                fontSize: 15,
                fontWeight: '600',
                marginHorizontal: 10,
                // borderWidth:1
              }}>{x}</Text>
            </TouchableOpacity>
          )

        })
      }
    </View>
  )

}



const styles = StyleSheet.create({
  primaryContainerStyl: {
    flexDirection: 'row', justifyContent: 'space-between',
    borderColor: 'rgba(112, 112, 112, 0.12)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginHorizontal: 20,
    paddingHorizontal: 3,
    marginVertical: 10,


  },


})
