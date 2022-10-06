// import React, { useEffect } from 'react';
// import { Alert, Animated } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// // Auth imports
// import ROUTES from './ROUTES';
// import Introduction from '../screens/IntroScreen';
// import SignUp from '../screens/SignUp';
// import SignIn from '../screens/SignIn';
// import ForgotPassword from '../screens/ForgotPassword';
// import Home from '../screens/Home'
// import Categories from '../screens/Categories'

// import { useSelector } from 'react-redux';
// import { TabRouter } from '@react-navigation/native';
// import VectorIcon from '../components/atoms/VectorIcon';
// import SvgUi from '../components/atoms/SvgUi';
// import svgs from '../assets/svgs';


// const { AUTH_STACKS, INIT_ROUTES, AUTH_ROUTES, TAB_ROUTES, TAB_STACKS } = ROUTES;

// const AuthComponents = {
//     Introduction,
//     SignUp,
//     SignIn,
//     ForgotPassword




// }//will open with Slide Animation

// const TabCompoents = {
//     Home,
//     Categories

// }//will open with Slide Animation

// const ContainerStack = createStackNavigator();
// const Stack = createNativeStackNavigator();
// const Tab = createMaterialBottomTabNavigator();
// // const Drawer = createDrawerNavigator();

// const options = () => ({
//     gestureEnabled: false,
//     transitionSpec: {
//         open: { animation: "timing", config: { duration: 400 } },
//         close: { animation: "timing", config: { duration: 400 } }
//     },
//     animation: 'slide_from_right',
//     // cardStyleInterpolator: forSlide
// })

// const stackOpts = () => ({
//     headerShown: false,
//     unmountOnBlur: true,
//     width: '85%',
//     title: '',

// });
// const AuthStacks = (props) => {
//     const userReducer = useSelector(state => state.userReducer)
//     console.log("userReduceer=>", userReducer);

//     return <Stack.Navigator screenOptions={stackOpts} initialRouteName={AUTH_ROUTES.Introduction.screen_name}>
//         {(AUTH_STACKS || []).map((routeInfo, index) => (
//             <Stack.Screen
//                 key={`AuthStack-Screen-key-${index}-${routeInfo.id}`}
//                 name={routeInfo.screen_name}
//                 component={AuthComponents[routeInfo.componenet]}
//                 options={routeInfo.options ? routeInfo.options : options}

//             />
//         ))}
//     </Stack.Navigator >
// }
// const TabStack = (props) => {
//     const userReducer = useSelector(state => state.userReducer)
//     console.log("userReduceer=>", userReducer);
//     return <Tab.Navigator
//         barStyle={{
//             backgroundColor: 'white', height: 70, justifyContent: 'flex-start', alignContent: 'flex-start', alignItems: "flex-start",
//             // shadowColor: '#00000029',
//             // shadowOffset: { width: 0, height: 20 },
//             // shadowOpacity: 0.8,
//             // shadowRadius: 20,
//             // elevation: 5,
//             borderColor: 'blue',



//             paddingBottom: 48

//         }}
//         style={{
//             // borderWidth: 2,
//             borderBottomLeftRadius: 25,
//             borderBottomRightRadius: 25,
//         }}


//     >
//         {(TAB_STACKS || []).map((routeInfo, index) => (
//             <Tab.Screen
//                 key={`TabStack`}
//                 name={routeInfo.screen_name}
//                 component={TabCompoents[routeInfo.componenet]}

//                 options={{
//                     tabBarLabel: '',
//                     tabBarIcon: ({ color }) => (
//                         // <MaterialCommunityIcons name={routeInfo.iconName} color={routeInfo.iconColor} size={26} />
//                         <SvgUi
//                             uri={routeInfo.iconName}
//                             height={40}
//                             width={40}
//                             onPress={() => {
//                                 Alert.alert("hy")
//                             }}



//                         />
//                     ),
//                 }}
//             />

//         ))}


//     </Tab.Navigator>


// }

// export default (props) => {
//     // const userReducer = useSelector(state => state.userReducer)
//     // console.log("userReduceer=>", userReducer);
//     const { isLoggedIn } = useSelector(state => state.userReducer);

//     return <ContainerStack.Navigator screenOptions={stackOpts} initialRouteName={INIT_ROUTES.INIT_APP}>
//         <ContainerStack.Screen
//             name={INIT_ROUTES.INIT_APP}
//             component={isLoggedIn ? TabStack : AuthStacks}
//         />
//     </ContainerStack.Navigator >
// }