import React from 'react';
import {Text, View} from 'react-native';

export function Feed() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'violet',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 26, color: 'black'}}>Feed</Text>
    </View>
  );
}
