/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {

  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigations'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { _NavgationRef } from './src/navigations/NavigationService';
import Toast from 'react-native-toast-message';
import { Provider,  } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react'


// #region :: VECTOR ICON LOAD START's FROM HERE 
AntDesign.loadFont();
Entypo.loadFont();
EvilIcons.loadFont();
Feather.loadFont();
FontAwesome.loadFont();
Fontisto.loadFont();
Ionicons.loadFont();
MaterialCommunityIcons.loadFont();
MaterialIcons.loadFont();
Foundation.loadFont();
SimpleLineIcons.loadFont();


// #endregion :: VECTOR ICON LOAD END's FROM HERE 



const App = () => {


  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, ...StyleSheet.absoluteFillObject ,backgroundColor:'red'}}>
        <StatusBar backgroundColor={'#fff'} barStyle={"dark-content"} />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer ref={_NavgationRef}>
              <View style={{ flex: 1, ...StyleSheet.absoluteFillObject }}>
                <RootStack />
              </View>
            </NavigationContainer>
          </PersistGate>
        </Provider>

        <Toast />

      </SafeAreaView>
    </SafeAreaProvider>

  );
};



export default App;
