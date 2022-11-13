import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Feed} from '../screens/Feed/Feed';
import {ChatList} from '../screens/ChatList/ChatList';
import { BottomTabsNavigator } from './TabNavigator';

const Tab = createMaterialTopTabNavigator();

export function TopTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="FeedTabs" component={BottomTabsNavigator} />
      <Tab.Screen name="Chat" component={ChatList} />
    </Tab.Navigator>
  );
}
