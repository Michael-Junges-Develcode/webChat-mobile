import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import {Post} from '../../components/Post/Post';
import {ScrollContainer} from './styles.feed';

export function Feed() {
  const {colors} = useTheme();

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
      <Post comments={comments} />
      <Post />
      <Post />
    </ScrollView>
  );
}
