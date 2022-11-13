import {gql} from '@apollo/client';
import {useTheme} from '@react-navigation/native';
import {Button} from '@ui-kitten/components';
import moment from 'moment';
import React, {useEffect} from 'react';
import Animated, {FadeInRight, FadeOut, Layout} from 'react-native-reanimated';
import {Comment} from '../Comment/Comments';
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
  Date,
} from './styles.post';
import 'moment/locale/pt-br';

interface Author {
  name: string;
  photoUrl: string;
}
interface Comment {
  comment: string;
  author: Author;
  createdAt: string;
  id: number;
}

interface Props {
  comments: Comment[];
  content: string;
  author: string;
  photoUrl: string;
  createdAt: string;
  deleteCallback: () => void;
}

export function Post({
  comments,
  author,
  content,
  createdAt,
  photoUrl,
  deleteCallback,
}: Props) {
  const {colors} = useTheme();
  moment.locale('pt-br');
  const relativeTime = moment(createdAt).fromNow();

  const commentList = comments?.map(comment => (
    <Comment
      content={comment.comment}
      author={comment.author.name}
      photoUrl={comment.author.photoUrl}
      date={comment.createdAt}
      key={comment.id}
    />
  ));

  return (
    <Animated.View
      entering={FadeInRight}
      exiting={FadeOut}
      layout={Layout.delay(50)}>
      <Container theme={colors}>
        <UserInfoWrapper>
          <Profile source={{uri: photoUrl}} />
          <UserTextWrapper>
            <Username theme={colors}>{author}</Username>
            <UserBio theme={colors}>Fullstack Developer</UserBio>
          </UserTextWrapper>
          <Date theme={colors}>{relativeTime}</Date>
        </UserInfoWrapper>
        <ContentWrapper>
          <ContentText theme={colors}>{content}</ContentText>
        </ContentWrapper>
        <Separator theme={colors} />
        <CommentsWrapper>
          <CommentLabel theme={colors}>Deixe seu comentário</CommentLabel>
          <Button onPress={() => deleteCallback()} />
          <CommentInput theme={colors} placeholder="Deixe seu comentário" />
        </CommentsWrapper>
        {commentList}
      </Container>
    </Animated.View>
  );
}
