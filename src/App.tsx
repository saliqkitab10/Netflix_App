/**
 * @format
 */

// import {View, Text, StyleSheet} from 'react-native';
// import React from 'react';
// import DownloadsScreen from './screens/DownloadsScreen';
// import HomeScreen from './screens/HomeScreen';
// const App = () => {
//   return <HomeScreen></HomeScreen>;
// };

// export default App;

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import HomeScreen from './screens/HomeScreen';
import DownloadsScreen from './screens/DownloadsScreen';
import LoginScreen from './screens/LoginScreen';
// import LoginScreen from './screens/LoginScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  DownloadsScreen: undefined;
  LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          options={{headerShown: false}}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="DownloadsScreen"
          component={DownloadsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
