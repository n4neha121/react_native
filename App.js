import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import {View, Text} from 'react-native';

import {StatusBar} from 'react-native';
import LoginScreen from './Newproject/LoginScreen';
import BottomNav from './Newproject/BottomNav';
const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1000);
    return () => {};
  }, []);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
/*<NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};*/
