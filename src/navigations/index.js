import React, { useEffect } from 'react';
import { Alert, Animated } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// Auth imports
import ROUTES from './ROUTES';
import Introduction from '../screens/IntroScreen';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import ForgotPassword from '../screens/ForgotPassword';
import Home from '../screens/Home'
import Categories from '../screens/Categories'
import Chat from '../screens/chat'
import SubCategories from '../screens/SubCategories'


import { useSelector } from 'react-redux';
import { TabRouter } from '@react-navigation/native';
import VectorIcon from '../components/atoms/VectorIcon';
import SvgUi from '../components/atoms/SvgUi';
import svgs from '../assets/svgs';


const { AUTH_STACKS, INIT_ROUTES, AUTH_ROUTES, TAB_ROUTES, TAB_STACKS } = ROUTES;

const AuthComponents = {
    Introduction,
    SignUp,
    SignIn,
    ForgotPassword




}//will open with Slide Animation

const TabCompoents = {
    Home,
    Categories,
    Chat,
    SubCategories
}//will open with Slide Animation

const ContainerStack = createStackNavigator();
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const options = () => ({
    gestureEnabled: false,
    animation: 'slide_from_right',
})

const stackOpts = () => ({
    headerShown: false,
    unmountOnBlur: true,
    // width: '85%',
    title: '',
});
const AuthStacks = (props) => {
    const userReducer = useSelector(state => state.userReducer)
    return <Stack.Navigator screenOptions={stackOpts} initialRouteName={AUTH_ROUTES.Introduction.screen_name}>
        {(AUTH_STACKS || []).map((routeInfo, index) => (
            <Stack.Screen
                key={`AuthStack-Screen-key-${index}-${routeInfo.id}`}
                name={routeInfo.screen_name}
                component={AuthComponents[routeInfo.componenet]}
                options={routeInfo.options ? routeInfo.options : options}
            />
        ))}
    </Stack.Navigator >
}
const TabStack = (props) => {
    const userReducer = useSelector(state => state.userReducer)
    return <Tab.Navigator
        safeAreaInsets={{ left: 20, right: 30, bottom: 30 }}
        style={{
            shadowRadius: 32,
            shadowOffset: {
                width: 0,
                height: 24,
            },
            shadowColor: 'blue',
            shadowOpacity: 1,
            elevation: 34,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }}
        barStyle={{
            shadowRadius: 12,
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowColor: 'red',
            shadowOpacity: 0.09,
            elevation: 34,
            borderTopWidth: 0,
            borderColor: "rgba(112, 112, 112, 0.48)",
            backgroundColor: 'rgba(255, 255, 255, 1)',
            paddingHorizontal: 12,
            height: 70,
        }}
    >
        {(TAB_STACKS || []).map((routeInfo, index) => (
            <Tab.Screen
                key={`TabStack`}
                name={routeInfo.screen_name}
                component={TabCompoents[routeInfo.componenet]}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <SvgUi
                            uri={routeInfo.iconName}
                            height={40}
                            width={40}
                            onPress={() => {
                                Alert.alert("hy")
                            }}
                        />
                    ),
                }}
            />

        ))}


    </Tab.Navigator >


}

export default (props) => {
    const { isLoggedIn, isGuestUser } = useSelector(state => state.userReducer);
    return <ContainerStack.Navigator screenOptions={stackOpts} initialRouteName={INIT_ROUTES.INIT_APP}>
        <ContainerStack.Screen
            name={INIT_ROUTES.INIT_APP}
            component={isLoggedIn || isGuestUser ? TabStack : AuthStacks}
        />
    </ContainerStack.Navigator >
}