import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import PhoneTemplate from './Newtemplate/page1';
import HomePage from './Newtemplate/page2';
import RecentAdds from './Newtemplate/Recentadds';
import Categories from './Newtemplate/Categories';
import Search from './Newtemplate/Search';
import Myads from './Newtemplate/Myads';
import Profile from './Newtemplate/profile';
import Language from './Newtemplate/Language';
import Mychats from './Newtemplate/mychats';
import Contactus from './Newtemplate/Contactus';
import Country from './Newtemplate/Country';
import MyFavouites from './Newtemplate/favourites';
import Addads from './Newtemplate/Add.';
import Maps from './map/map1';
import Mapdata from './map/dragpol';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createNativeStackNavigator();

function DrawerNavigator() {
  return (
    //we have made a customize button where a file primary is included in it.after that a main name
    //has included where a stacknavigator component is called in stack navigator a main tab component is called wher in main drawer the bottom tabs will be shown
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#3492eb',
          width: 240,
        },
      }}>
      <Drawer.Screen name="Recent Adds" component={RecentAdds} />
      <Drawer.Screen name="categories" component={Categories} />
      <Drawer.Screen name="search" component={Search} />
      <Drawer.Screen name="My ads" component={Myads} />
      <Drawer.Screen name="My Favorites" component={MyFavouites} />
      <Drawer.Screen name="Add ads" component={Addads} />
      <Drawer.Screen name="profile" component={Profile} />
      <Drawer.Screen name="Language" component={Language} />
      <Drawer.Screen name="My chats" component={Mychats} />
      <Drawer.Screen name="Contactus" component={Contactus} />
      <Drawer.Screen name="Country" component={Country} />
    </Drawer.Navigator>
  );
}

function HomeScreenStack() {
  return (
    <HomeStack.Navigator
      initialRouteName="Map"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Map" component={Maps} />
      <HomeStack.Screen name="Map2" component={Mapdata} />
      <HomeStack.Screen name="HomePage" component={HomePage} />
    </HomeStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="First"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="First" component={PhoneTemplate} />
        <Stack.Screen name="Home" component={HomeScreenStack} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
