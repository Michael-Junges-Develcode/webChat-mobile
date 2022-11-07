import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';
import {client} from './src/global/api/client';
import {DarkTheme, LightTheme} from './src/global/themes/theme';
import {TopTabs} from './src/routes/TopTabs';

const App = () => {
  const scheme = useColorScheme();
  const themePreference = scheme === 'dark' ? DarkTheme : LightTheme;

  return (
    <ApolloProvider client={client}>
      <NavigationContainer theme={themePreference}>
        <TopTabs />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
