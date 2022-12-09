import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeTabNavigator from './HomeTab';
import {TAB_NAVIGATION} from './screen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={TAB_NAVIGATION}>
        <Stack.Screen name={TAB_NAVIGATION} component={HomeTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
