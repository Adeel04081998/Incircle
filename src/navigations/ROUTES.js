
import React from "react";
import svgs from "../assets/svgs/index";

const INIT_ROUTES = {
    "INIT_APP": "INIT_APP",
};
const AUTH_ROUTES = {
    "Introduction": {
        screen_name: "INTRODUCTION",
        options: null,
    },
    "SignIn": {
        screen_name: "SignIn",
        options: null,
    },
    "SignUp": {
        screen_name: "SignUp",
        options: null,
    },
    "ForgotPassword": {
        screen_name: "ForgotPassword",
        options: null,
    },

};
const TAB_ROUTES = {
    "Home": {
        screen_name: "Home",
        options: null,
        iconName: svgs.Home_TabIcon(),
        iconColor: 'red',
        iconType: 'MaterialCommunityIcons'

    },
    "Categories": {
        screen_name: "Categories",
        options: null,
        // iconName: 'chatbox',
        iconName: svgs.Explore_TabIcon(),
        iconColor: 'red',
        iconType: 'Ionicons'
    },
    "SubCategories": {
        screen_name: "SubCategories",
        options: null,
        // iconName: 'chatbox',
        // iconName: svgs.Explore_TabIcon(),
        // iconColor: 'red',
        // iconType: 'Ionicons'
    },
    "Chat": {
        screen_name: "Chat",
        options: null,
        // iconName: 'chatbox',
        iconName: svgs.Chat_TabIcon(),
        iconColor: 'red',
        iconType: 'Ionicons'
    },
    

};



const AUTH_STACKS = Object.keys(AUTH_ROUTES).map((key, index) => ({ id: `init-${index}-${key}`, screen_name: AUTH_ROUTES[key].screen_name, componenet: key }));
const TAB_STACKS = Object.keys(TAB_ROUTES).map((key, index) => ({ id: `init-${index}-${key}`, screen_name: TAB_ROUTES[key].screen_name, iconName: TAB_ROUTES[key].iconName, iconColor: TAB_ROUTES[key].iconColor, iconType: TAB_ROUTES[key].iconType, componenet: key }));



export default {
    AUTH_ROUTES,
    AUTH_STACKS,
    INIT_ROUTES,
    TAB_ROUTES,
    TAB_STACKS

}

