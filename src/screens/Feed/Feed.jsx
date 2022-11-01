import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import {Post} from '../../components/Post/Post';
import {ScrollContainer} from './styles.feed';

export function Feed() {
  const {colors} = useTheme();

  return (
    <ScrollView contentContainerStyle={{backgroundColor: colors.background}}>
      <Post />
      <Post />
      <Post />
    </ScrollView>
  );
}
