import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  Container,
  Profile,
  Username,
  CommentsWrapper,
  ContentWrapper,
  UserTextWrapper,
  UserInfoWrapper,
  UserBio,
  CommentLabel,
  Separator,
  CommentInput,
  ContentText,
} from './styles.post';

export function Post() {
  const {colors} = useTheme();

  return (
    <Container theme={colors}>
      <UserInfoWrapper>
        <Profile source={require('../../global/assets/images/profile.jpg')} />
        <UserTextWrapper>
          <Username theme={colors}>Michael Junges</Username>
          <UserBio theme={colors}>Fullstack Developer</UserBio>
        </UserTextWrapper>
      </UserInfoWrapper>
      <ContentWrapper>
        <ContentText theme={colors}>
          Olá pessoal isso aqui é um post de exmplo eladj fmafl sdkcol oaofiw
          mamakedj sskfjeia
        </ContentText>
        <ContentText theme={colors}>Até mais! 🇧🇷</ContentText>
      </ContentWrapper>
      <Separator theme={colors} />
      <CommentsWrapper>
        <CommentLabel theme={colors}>Deixe seu comentário</CommentLabel>
        <CommentInput theme={colors} placeholder="Deixe seu comentário" />
      </CommentsWrapper>
    </Container>
  );
}
