import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CenteredImage from './Frontend_design/firstpage';
import HomeScreen from './Frontend_design/Homescreen';
import SavedScreen from './Frontend_design/Saved';
import MessagesScreen from './Frontend_design/Messages';
import ProfileScreen from './Frontend_design/profile';
import {Image} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused
                    ? require('./Frontend_design/assets/homeActive.png')
                    : require('./Frontend_design/assets/home.png')
                }
                style={{height: 25, width: 25}}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused
                    ? require('./Frontend_design/assets/saved.png')
                    : require('./Frontend_design/assets/savedwhite.png')
                }
                style={{height: 25, width: 25}}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused
                    ? require('./Frontend_design/assets/activemsg.png')
                    : require('./Frontend_design/assets/messageinactive.png')
                }
                style={{height: 25, width: 25}}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused
                    ? require('./Frontend_design/assets/profileactive.png')
                    : require('./Frontend_design/assets/inactiveprofile.png')
                }
                style={{height: 25, width: 25}}
                resizeMode="contain"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="First"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="First"
          component={CenteredImage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={MainTabNavigator}
          options={{headerShown: false}}
        />
        {/* <Sta  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
