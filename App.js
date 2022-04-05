/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  StatusBar,
  ScrollView,
  FlatList,
  RefreshControl,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

import {Icon} from 'react-native-elements';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// //API
// import {getTodayPopularNews} from './api/getTodayPopularNews';

// //COMPONENT
// import CardNews from './components/CardNews';
// import Header from './components/Header';

//SCREEN
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';

// const wait = timeout => {
//   return new Promise(resolve => setTimeout(resolve, timeout));
// };
//const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName, type;

              if (route.name === 'Home') {
                iconName = 'home';
              }
              if (route.name === 'Search') {
                iconName = 'search';
              }
              // You can return any component that you like here!
              return <Icon name={iconName} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              borderTopStartRadius: 15,
              borderTopEndRadius: 15,
              backgroundColor: '#fff',
            },
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
//#E5E5EA
/**<NavigationContainer initialState={HomeScreen}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer> */
//<StatusBar style={{backgroundColor: backgroundStyle.backgroundColor}} />
