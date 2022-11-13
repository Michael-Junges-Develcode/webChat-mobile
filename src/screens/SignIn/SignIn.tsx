import {useTheme} from '@react-navigation/native';
import {Input} from '@ui-kitten/components';
import React, {useState} from 'react';
import {Text} from 'react-native';
import {Container} from './styles.SignIn';

export function SignIn() {
  const colors = useTheme();
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
  return (
    <Container theme={colors}>
      <Input value={email} onChangeText={text => setEmail(text)} />
      <Input
        value={password}
        onChangeText={text => setPassword(text)}
              secureTextEntry={hidePassword}
              
      />
    </Container>
  );
}
