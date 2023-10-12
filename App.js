import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import {View, Text} from 'react-native';
import Dropdown from './DropdownSelector/dropdownsel';
import {StatusBar} from 'react-native';
const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1000);
    return () => {};
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="dropown" component={Dropdown} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
