import {NavigationContainer} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {useColorScheme} from 'react-native';
import {DarkTheme, LightTheme} from './src/global/themes/theme';
import {TopTabs} from './src/routes/TopTabs';

const App = () => {
  const scheme = useColorScheme();
  const themePreference = scheme === 'dark' ? DarkTheme : LightTheme;

  return (
    <NavigationContainer theme={themePreference}>
      <TopTabs />
    </NavigationContainer>
  );
};

export default App;
