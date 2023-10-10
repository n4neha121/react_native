import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Octicons';
import SecondIcon from 'react-native-vector-icons/Feather';
import ThirdIcon from 'react-native-vector-icons/MaterialIcons';

import DashboardScreen from './Dashboardscreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBarOptions={{
        style: {height: 55, borderTopWidth: 0, elevation: 0},
        showLabel: false,
        activeTintColor: '#057df5',
      }}>
      <Tab.Screen
        name="home"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={28} color={color} />,
        }}
      />
      <Tab.Screen
        name="bell"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="bell" color={color} size={28} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({color}) => (
            <SecondIcon name="user" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Notes"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({color}) => (
            <ThirdIcon name="speaker-notes" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="App"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="apps" color={color} size={28} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
