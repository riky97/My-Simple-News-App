/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {TurboModuleRegistry, useColorScheme} from 'react-native';

import {Icon} from 'react-native-elements';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//SCREEN
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';

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

              return <Icon name={iconName} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              borderTopStartRadius: 15,
              borderTopEndRadius: 15,
              backgroundColor: '#fff',
              height: 60,
            },
            tabBarLabel: route.name,
            tabBarLabelStyle: {
              fontSize: 15,
              fontFamily: 'Aeroport',
            },
            title: '',
            tabBarComponent: ({navigation}) => (
              <BottomBar navigation={navigation} />
            ),
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
