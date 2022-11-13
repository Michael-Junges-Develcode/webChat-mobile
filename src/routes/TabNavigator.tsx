import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feed} from '../screens/Feed/Feed';
import {Profile} from '../screens/Profile/Profile';

const {Navigator, Screen} = createBottomTabNavigator();

export function BottomTabsNavigator() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Feed" component={Feed} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}
