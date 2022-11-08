import {gql, useQuery} from '@apollo/client';
import {useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {Post} from '../../components/Post/Post';

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

  const {loading, error, data} = useQuery(getFirstPosts);
  const response = data?.getFirstPostsPage;

  useEffect(() => {
    !!data && console.log(response);
    !!error && console.log(error);
  }, [data, error]);

  const comments = [
    {
      author: 'Kevin de Gasperi',
      content: 'Muito Bom!',
      date: new Date().toISOString(),
      id: 1,
    },
    {
      author: 'Diógenes Barros',
      content: 'Kkkkkkk 🤣',
      date: new Date().toISOString(),
      id: 2,
    },
  ];

  return (
    <ScrollView contentContainerStyle={{backgroundColor: colors.background}}>
      <Post comments={response.comments} />
      <Post />
      <Post />
    </ScrollView>
  );
}
