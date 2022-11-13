import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import React from 'react';
import {useColorScheme} from 'react-native';
import {client} from './src/global/api/client';
import {DarkTheme, LightTheme} from './src/global/themes/theme';
import {TopTabs} from './src/routes/TopTabs';
import {default as theme} from './src/global/themes/custom-theme.json';
import {Routes} from './src/routes/routes';
import {AuthProvider} from './src/global/context/AuthenticationContext';

const App = () => {
  const scheme = useColorScheme();
  const themePreference = scheme === 'dark' ? DarkTheme : LightTheme;

  return (
    <ApolloProvider client={client}>
      <ApplicationProvider
        {...eva}
        theme={
          scheme === 'dark' ? {...eva.dark, ...theme} : {...eva.light, ...theme}
        }>
        <NavigationContainer theme={themePreference}>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </NavigationContainer>
      </ApplicationProvider>
    </ApolloProvider>
  );
};

export default App;
