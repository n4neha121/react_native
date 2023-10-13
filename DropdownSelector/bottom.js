import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Dropdown from './dropdowndata';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBarOptions={{
        style: {height: 55, borderTopWidth: 0, elevation: 0},
        showLabel: false,
        activeTintColor: '#0b5ee3',
      }}>
      <Tab.Screen
        name="Home"
        component={Dropdown}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={28} color={color} />,
        }}
      />
      <Tab.Screen
        name="Local Mall"
        component={Dropdown}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="shopping-bag" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Dropdown}
        options={{
          tabBarIcon: ({color}) => (
            <View style={styles.middleIcon}>
              <Icon name="search" color="#eb8f34" size={28} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Dropdown}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="favorite" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Dropdown}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
