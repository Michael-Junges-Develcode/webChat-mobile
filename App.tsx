import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';
import {DarkTheme, LightTheme} from './src/global/themes/theme';
import {TopTabs} from './src/routes/TopTabs';

const App = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      <TopTabs />
    </NavigationContainer>
  );
};

export default App;
