import { useTheme } from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {Container} from './styles.chat';

export function ChatList() {
  const colors = useTheme();
  return (
    <Container>
      <Text theme={colors} style={{fontSize: 26, color: 'white'}}>
        Chat
      </Text>
    </Container>
  );
}
