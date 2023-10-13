import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SecondIcon from 'react-native-vector-icons/SimpleLineIcons';
import ThirdIcon from 'react-native-vector-icons/EvilIcons';
import HomeScreen from './Flipkart/HomeScreen';
import ProductDetailScreen from './Flipkart/details';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1000);
    return () => {};
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="dropdown" component={BottomTabs} />
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {height: 55, borderTopWidth: 0, elevation: 0},
        //showLabel: false,
        activeTintColor: '#057df5',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={30} color={color} />,
          headerShown: false, //if want to make headershown false for a particular tabscreen place headershown false in the tabscreen
        }}
      />
      <Tab.Screen
        name="Categories"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="category" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <SecondIcon name="bell" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Accounts"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <ThirdIcon name="user" color={color} size={34} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <ThirdIcon name="cart" color={color} size={32} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
/////////////////////////////////////////////////