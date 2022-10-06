
// /** https://reactnavigation.org/docs/navigation-actions **/
// import React from "react";
// import { CommonActions, StackActions, DrawerActions, TabActions } from '@react-navigation/native';
// export const _NavgationRef = React.createRef({});
// const NavigationActions = {
//     common_actions: {
//         navigate: (name = "", params = {}, navigation = _NavgationRef.current) => {
//             navigation.dispatch(
//                 CommonActions.navigate({
//                     name,
//                     params,
//                 })
//             )
//         },
//         goBack: (route = null, navigation = _NavgationRef.current) => {
//             if (route) {
//                 // Need to test before use
//                 navigation.dispatch({
//                     ...CommonActions.goBack(),
//                     source: route.key,
//                     target: route.target
//                 });
//             } else navigation.dispatch(CommonActions.goBack());

//         },
      
// }
// }
// export const goBack = NavigationActions.common_actions.goBack; // Example to import as an individual;
// export default {
//     NavigationActions
// }
