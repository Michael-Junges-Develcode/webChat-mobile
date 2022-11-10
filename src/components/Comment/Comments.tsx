import {useTheme} from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import {
  Container,
  Content,
  UserInfoWrapper,
  Profile,
  UserAndDateWrapper,
  Username,
  Date,
} from './styles.comment';

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
      <UserAndDateWrapper>
        <UserInfoWrapper>
          <Profile source={require('../../global/assets/images/profile.jpg')} />
          <Username theme={colors}>{author}</Username>
        </UserInfoWrapper>
        <Date theme={colors}>{relativeTime}</Date>
      </UserAndDateWrapper>
      <Content theme={colors}>{content}</Content>
    </Container>
  );
}
