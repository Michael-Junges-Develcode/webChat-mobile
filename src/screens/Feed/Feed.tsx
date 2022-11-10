import {gql, useMutation, useQuery} from '@apollo/client';
import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import Animated, {Layout} from 'react-native-reanimated';
import {Post} from '../../components/Post/Post';

interface Comment {
  comment: string;
  author: {name: string};
  createdAt: string;
  id: number;
}

interface Posts {
  comments: Comment[];
  content: string;
  author: {
    name: string;
  };
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

  const deleteOwnPost = gql`
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
  const [deletePost, {data: dataMut, error: errMut}] =
    useMutation(deleteOwnPost);

  function deletePostFromState(postId: number) {
    //deletePost({variables: {postId: postId}});
    setPosts(prevState => prevState.filter(post => post.id !== postId));
    console.log(postId);
  }

  const renderPosts = posts?.map(post => (
    <Post
      key={post.id}
      comments={post.comments}
      author={post.author}
      content={post.content}
      createdAt={post.createdAt}
      deleteCallback={() => deletePostFromState(post.id)}
    />
  ));

  useEffect(() => {
    !!error && console.log(error);
    !!errMut && console.log(errMut);
  }, [error, errMut]);

  useEffect(() => {
    !!data && setPosts(data.getFirstPostsPage);
  }, [data]);

  useEffect(() => {
    console.log(dataMut);
  }, [dataMut]);

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
