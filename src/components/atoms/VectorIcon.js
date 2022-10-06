import React, { lazy } from 'react';
import { View,Text } from "react-native";


const VectorIcon = (props) => {

    switch (props.type) {
      case "AntDesign": {
        const AntDesign = require(`react-native-vector-icons/AntDesign`).default;
        return (
          <AntDesign
            {...props}
            name={props.name}
            size={props.size}
            style={props.style}
            color={props.color}
            onPress={props.onPress}
          />
        );
      }
      case "Entypo": {
        const Entypo = require("react-native-vector-icons/Entypo").default;
        return (
          <Entypo
            {...props}
            name={props.name}
            size={props.size}
            style={props.style}
            color={props.color}
            onPress={props.onPress}
          />
        );
      }
      case "SimpleLineIcons": {
        const SimpleLineIcons = require("react-native-vector-icons/SimpleLineIcons").default;
        return (
          <SimpleLineIcons
            {...props}
            name={props.name}
            size={props.size}
            style={props.style}
            color={props.color}
            onPress={props.onPress}
          />
        );
      }
      case "EvilIcons": {
        const EvilIcons = require("react-native-vector-icons/EvilIcons").default;
        return (
          <EvilIcons
            {...props}
            name={props.name}
            size={props.size}
            style={props.style}
            color={props.color}
            onPress={props.onPress}
          />
        );
      }
      case "MaterialIcons": {
        const MaterialIcons = require("react-native-vector-icons/MaterialIcons").default;
        return (
          <MaterialIcons
            {...props}
            name={props.name}
            size={props.size}
            style={props.style}
            color={props.color}
            onPress={props.onPress}
          />
        );
      }
      case "FontAwesome": {
        const FontAwesome = require("react-native-vector-icons/FontAwesome").default;
        return (
          <FontAwesome
            {...props}
            name={props.name}
            size={props.size}
            style={props.style}
            color={props.color}
            onPress={props.onPress}
          />
        );
      }
      case "FontAwesome5": {
        const FontAwesome5 = require("react-native-vector-icons/FontAwesome5").default;
        return (
          <FontAwesome5
            {...props}
            name={props.name}
            size={props.size}
            style={props.style}
            color={props.color}
            onPress={props.onPress}
            brand={props.brand}
            solid={props.solid}
          />
        );
      }
      case "Foundation": {
        const Foundation = require("react-native-vector-icons/Foundation").default;
        return (
          <Foundation
            {...props}
            name={props.name}
            size={props.size}
            style={props.style}
            color={props.color}
            onPress={props.onPress}
          />
        );
      }
      case "MaterialCommunityIcons": {
        const MaterialCommunityIcons = require("react-native-vector-icons/MaterialCommunityIcons").default;
        return (
          <MaterialCommunityIcons
            {...props}
            name={props.name}
            size={props.size}
            style={props.style}
            color={props.color}
            onPress={props.onPress}
          />
        );
      }
      case "Zocial": {
        const Zocial = require("react-native-vector-icons/Zocial").default;
        return (
          <Zocial
            {...props}
            name={props.name}
            size={props.size}
            style={props.style}
            color={props.color}
            onPress={props.onPress}
          />
        );
      }
      case "Octicons": {
        const Octicons = require("react-native-vector-icons/Octicons").default;
        return (
          <Octicons
            {...props}
            name={props.name}
            size={props.size}
            style={props.style}
            color={props.color}
            onPress={props.onPress}
          />
        );
      }
      case "Fontisto": {
        const Fontisto = require("react-native-vector-icons/Fontisto").default;
        return (
          <Fontisto
            {...props}
            name={props.name}
            size={props.size}
            style={props.style}
            color={props.color}
            onPress={props.onPress}
          />
        );
      }
      case "Feather": {
        const Feather = require("react-native-vector-icons/Feather").default;
        return (
          <Feather
            {...props}
            name={props.name}
            size={props.size}
            style={props.style}
            color={props.color}
            onPress={props.onPress}
          />
        );
      }
      default: {
        const Ionicons = require("react-native-vector-icons/Ionicons").default;
        return (
          <Ionicons
            {...props}
            name={props.name}
            size={props.size}
            style={props.style}
            color={props.color}
            onPress={props.onPress}
          />
        );
      }
    }



}//end of VECTOR ICON


export default VectorIcon



{/* <key>UIAppFonts</key>
<array>
    <string>fonts/AntDesign.ttf</string>
    <string>fonts/Entypo.ttf</string>
    <string>=fonts/Evillcons.ttf</string>
    <string>fonts/Feather.ttf</string>
    <string>fonts/FontAwesome5_Brands.ttf</string>
    <string>fonts/FontAwesome5_Regular.ttf</string>
    <string>fonts/FontAwesome5_Solid.ttf</string>
    <string>fonts/Fontisto.ttf</string>
    <string>fonts/Foundation.ttf</string>
    <string>fonts/Ionicons.ttf</string>
    <string>fonts/MaterialCommunityIcons.ttf</string>
    <string>fonts/MaterialIcons.ttf</string>
    <string>fonts/Octicons.ttf</string>
</array> */}

