import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './combinations/Home';
import AboutScreen from './combinations/About';
import SettingsScreen from './combinations/Settings';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="About" component={AboutScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);
const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Tab">
      <Stack.Screen
        name="Tab"
        component={HomeStack}
        options={{headerStyle: {backgroundColor: '#FFD700'}}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeStack} />
    <Drawer.Screen name="Profile" component={AboutScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
  </Drawer.Navigator>
);
