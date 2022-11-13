import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Feed} from '../screens/Feed/Feed';
import {ChatList} from '../screens/ChatList/ChatList';
import { BottomTabsNavigator } from './TabNavigator';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={BottomTabsNavigator} />
      <Drawer.Screen name="Article" component={ChatList} />
    </Drawer.Navigator>
  );
}
