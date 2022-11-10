import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
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
      <ApplicationProvider {...eva} theme={{...eva.dark, ...DarkTheme.colors}}>
        <NavigationContainer theme={themePreference}>
          <TopTabs />
        </NavigationContainer>
      </ApplicationProvider>
    </ApolloProvider>
  );
};

export default App;
