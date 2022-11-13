import {gql, useMutation, useQuery} from '@apollo/client';
import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import Animated, {Layout} from 'react-native-reanimated';
import {Post} from '../../components/Post/Post';

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

interface Posts {
  comments: Comment[];
  content: string;
  author: Author;
  createdAt: string;
  id: number;
}

export function Feed() {
  const {colors} = useTheme();

  const getFirstPosts = gql`
    query GetFirstPostsPage {
      getFirstPostsPage {
        id
        author {
          name
          photoUrl
        }
        content
        createdAt
        comments {
          comment
          id
          author {
            name
            photoUrl
          }
          createdAt
        }
      }
    }
  `;

  const deletePost = gql`
    mutation DeleteOwnPost($postId: Float!) {
      deleteOwnPost(postId: $postId) {
        id
        author {
          name
        }
        content
        createdAt
        comments {
          comment
          id
          author {
            name
          }
          createdAt
        }
      }
    }
  `;

  const {error, data} = useQuery(getFirstPosts);
  const [posts, setPosts] = useState<Posts[]>([]);
  const [deleteOwnPost, {data: dataMut}] = useMutation(deletePost);

  function deletePostFromState(postId: number) {
    //deleteOwnPost({variables: {postId: postId}, onError: e => console.log(e)});
    setPosts(prevState => prevState.filter(post => post.id !== postId));
    console.log(postId);
  }

  const renderPosts = posts?.map(post => (
    <Post
      key={post.id}
      comments={post.comments}
      author={post.author.name}
      content={post.content}
      photoUrl={post.author.photoUrl}
      createdAt={post.createdAt}
      deleteCallback={() => deletePostFromState(Number(post.id))}
    />
  ));

  useEffect(() => {
    !!error && console.log(error);
  }, [error]);

  useEffect(() => {
    !!data && setPosts(data.getFirstPostsPage);
  }, [data]);

  // useEffect(() => {
  //   console.log(dataMut);
  // }, [dataMut]);

  return (
    <Animated.ScrollView
      layout={Layout.delay(200)}
      contentContainerStyle={{
        backgroundColor: colors.background,
        flexGrow: 1,
      }}>
      {renderPosts}
    </Animated.ScrollView>
  );
}
