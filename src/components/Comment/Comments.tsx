import {useTheme} from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import {Container, Content} from './styles.comment';

interface Props {
  content: string;
  author: string;
  date: string;
}

export function Comment({content, author, date}: Props) {
  const {colors} = useTheme();

  moment.locale('pt-br');
  const relativeTime = moment(date).fromNow();

  return (
    <Container theme={colors}>
      <Content theme={colors}>{author}</Content>
      <Content theme={colors}>{content}</Content>
      <Content theme={colors}>{relativeTime}</Content>
    </Container>
  );
}
