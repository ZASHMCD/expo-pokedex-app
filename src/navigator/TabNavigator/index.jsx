/* eslint-disable react/prop-types */
// Dependencies
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import { HomeScreen } from '../../screens/HomeScreen';
import { SectionScreen } from '../../screens/SectionScreen';
import { CreditsScreen } from '../../screens/CreditsScreen';

const activeColor = '#4775f2';
const inactiveColor = '#b8bece';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Section: SectionScreen
}, {
  mode: 'modal',
  headerMode: 'none',
});

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  const { routeName } = navigation.state.routes[navigation.state.index];

  if (routeName === 'Section') {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name="ios-home"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    )
  };
};

const CreditsStack = createStackNavigator({
  Credits: CreditsScreen
}, {
  headerMode: 'none',
});

CreditsStack.navigationOptions = {
  tabBarLabel: 'Credits',
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-information-circle-outline"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

export const TabNavigator = createBottomTabNavigator({
  HomeStack, CreditsStack
});
