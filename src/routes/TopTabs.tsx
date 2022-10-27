import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Feed} from '../screens/Feed/Feed';
import {ChatList} from '../screens/ChatList/ChatList';

const Tab = createMaterialTopTabNavigator();

export function TopTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Chat" component={ChatList} />
    </Tab.Navigator>
  );
}
