import React from 'react';
import {Text, View} from 'react-native';

export function ChatList() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 26, color: 'white'}}>Chat</Text>
    </View>
  );
}
