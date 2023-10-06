import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
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
        activeTintColor: '#eb8f34',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={28} color={color} />,
        }}
      />
      <Tab.Screen
        name="Local Mall"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="shopping-bag" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
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
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="favorite" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
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
const styles = StyleSheet.create({
  middleIcon: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#eb8f34',
    borderWidth: 2,
    borderRadius: 30,
    elevation: 5,
    top: -25,
  },
});
