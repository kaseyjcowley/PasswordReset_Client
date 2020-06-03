/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {InitiateResetPassword} from './InitiateResetPassword';
import {FinalizeResetPassword} from './FinalizeResetPassword';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Reset Password" component={InitiateResetPassword} />
        <Stack.Screen
          name="Finish Reset Password"
          component={FinalizeResetPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
