import { Dimensions } from "react-native";
export default {
    // url:"http://in-circle.com/Incircle-apis/login.php"
    // https://in-circle.com/Incircle-apis/login.php
    url: "https://in-circle.com/Incircle-apis",
    screen_dimensions: Dimensions.get("screen"),
    window_dimensions: Dimensions.get("window"),
    standard_margin: 10,

}










// import React, { useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
// import svgs from "../../assets/svgs";
// import SvgUi from "../atoms/SvgUi";
// import { initColors } from "../../res/colors";
// import constants from "../../res/constants";


// export default ({ primaryContainerStyl = {}, textStyl = {}, tabTittle = '' }) => {
//     const [state, setState] = useState({
//         tabsArr: [
//             { id: 1, field: "email", placeholder: 'Email', validationerror: "Invalid email address", },
//             { id: 2, field: "password", placeholder: 'Password', validationerror: "Invalid password", },
//         ],
//     })

//     return (
//         <View style={[styles.primaryContainerStyl, primaryContainerStyl]}>
//             {

//                 state.tabsArr.map(() => {
//                     return (

//                         <View style={{
//                             flexDirection: 'row', justifyContent: 'space-between',
//                             borderColor: 'rgba(112, 112, 112, 0.12)',
//                             borderRadius: 10,
//                             // padding: 15,
//                             // borderWidth: 0.1,
//                             shadowColor: '#000',
//                             shadowOffset: { width: 0, height: 1 },
//                             shadowOpacity: 0.8,
//                             shadowRadius: 2,
//                             elevation: 5,
//                             backgroundColor: 'rgba(255, 255, 255, 1)'

//                         }}>
//                             <TouchableOpacity style={{ backgroundColor: 'rgba(1, 130, 252, 1)', paddingVertical: 20, margin: 5, flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
//                                 <Text style={{ color: initColors.white }}>{tabTittle}</Text>
//                             </TouchableOpacity>
//                             {/* <TouchableOpacity style={{ backgroundColor: 'rgba(1, 130, 252, 1)', paddingVertical: 20, margin: 5, flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
//                             <Text>INCIRCLE FEEDS </Text>
//                         </TouchableOpacity> */}
//                         </View>

//                     )
//                 })

//             }


//         </View>
//     )
// }



// const styles = StyleSheet.create({
//     primaryContainerStyl: {
//         // width:constants.window_dimensions.width,
//         flex: 1,
//         paddingHorizontal: 20,
//         backgroundColor: 'rgba(255, 255, 255, 1)',

//         // height:20


//     },

// })