import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch user data from the server using Axios
    axios
      .get('https://dummyjson.com/products') // Replace with your API URL
      .then(response => {
        setProducts(response.data?.products);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleProductPress = product => {
    // Navigate to the ProductDetailScreen with the selected product
    navigation.navigate('ProductDetailScreen', {product});
  };

  return (
    <ImageBackground
      source={require('./assets/background.jpeg')}
      style={styles.Background}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Flipkart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttontwo}>
          <Text style={styles.buttext}>Grocery</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={products}
        renderItem={({item}) => {
          const {thumbnail} = item;
          return (
            <TouchableOpacity onPress={() => handleProductPress(item)}>
              <Image
                source={{uri: thumbnail}}
                style={{
                  width: 500,
                  height: 200,
                  marginTop: 100,
                  marginRight: 5,
                  borderWidth: 1,
                  borderColor: '#000',
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </ImageBackground>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  Background: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    //textAlign: 'center',
    //alignContent: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontStyle: 'italic',
    paddingLeft: 45,
    paddingTop: 4,
  },
  button: {
    backgroundColor: '#3471eb',
    height: 40,
    width: '42%',
    top: 20,
    left: 20,
    position: 'absolute',
    borderRadius: 8,
    marginRight: 5,
    marginTop: 10,
  },
  buttontwo: {
    backgroundColor: '#fff',
    height: 40,
    width: '42%',
    top: 20,
    right: 20,
    position: 'absolute',
    borderRadius: 8,
    marginTop: 10,
  },
  buttext: {
    fontSize: 19,
    //textAlign: 'center',
    //alignContent: 'center',
    fontWeight: 'bold',
    color: '#000',
    fontStyle: 'italic',
    paddingLeft: 45,
    paddingTop: 4,
  },
  imageSty: {
    position: 'absolute',
    height: 30,
    width: 40,
    resizeMode: 'cover',
    left: 30,
  },
  container: {
    backgroundColor: '#fff',
    paddingTop: 25,
    justifyContent: 'center',
    height: '100%',
    width: '90%',
    marginTop: 100,
    marginLeft: 17,
  },
  textcolor: {
    color: '#000',
    fontSize: 16,
  },
  containerone: {},
  border: {
    borderWidth: 0.5,
    borderColor: 'gray',
    width: '100%',
  },
});
////////////////////////////////////////////////////////////////////
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch user data from the server using Axios
    axios
      .get('https://dummyjson.com/products') // Replace with your API URL
      .then(response => {
        setProducts(response.data?.products);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleProductPress = product => {
    // Navigate to the ProductDetailScreen with the selected product
    navigation.navigate('ProductDetailScreen', {product});
  };

  return (
    <ImageBackground
      source={require('./assets/background.jpeg')}
      style={styles.Background}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Flipkart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttontwo}>
          <Text style={styles.buttext}>Grocery</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={products}
        renderItem={({item}) => {
          const {thumbnail} = item;
          return (
            <TouchableOpacity onPress={() => handleProductPress(item)}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#000',
                  marginTop:100,
                  paddingHorizontal: 10,
                  marginRight: 20,
                }}>
                <Image
                  source={{uri: thumbnail}}
                  style={{
                    width: 150,
                    height: 150,
                    marginTop: 100,
                    marginRight: 5,
                    borderWidth: 1,
                    borderColor: '#000',
                    resizeMode: 'contain',
                  }}
                />
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </ImageBackground>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  Background: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    //textAlign: 'center',
    //alignContent: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontStyle: 'italic',
    paddingLeft: 45,
    paddingTop: 4,
  },
  button: {
    backgroundColor: '#3471eb',
    height: 40,
    width: '42%',
    top: 20,
    left: 20,
    position: 'absolute',
    borderRadius: 8,
    marginRight: 5,
    marginTop: 10,
  },
  buttontwo: {
    backgroundColor: '#fff',
    height: 40,
    width: '42%',
    top: 20,
    right: 20,
    position: 'absolute',
    borderRadius: 8,
    marginTop: 10,
  },
  buttext: {
    fontSize: 19,
    //textAlign: 'center',
    //alignContent: 'center',
    fontWeight: 'bold',
    color: '#000',
    fontStyle: 'italic',
    paddingLeft: 45,
    paddingTop: 4,
  },
  imageSty: {
    position: 'absolute',
    height: 30,
    width: 40,
    resizeMode: 'cover',
    left: 30,
  },
  container: {
    backgroundColor: '#fff',
    paddingTop: 25,
    justifyContent: 'center',
    height: '100%',
    width: '90%',
    marginTop: 100,
    marginLeft: 17,
  },
  textcolor: {
    color: '#000',
    fontSize: 16,
  },
  containerone: {},
  border: {
    borderWidth: 0.5,
    borderColor: 'gray',
    width: '100%',
  },
});
//////////////////////////////////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SecondIcon from 'react-native-vector-icons/SimpleLineIcons';
import ThirdIcon from 'react-native-vector-icons/EvilIcons';
import HomeScreen from './Flipkart/HomeScreen';
import ProductDropdown from './Flipkart/details';

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
        <Stack.Screen name="ProductDetailScreen" component={ProductDropdown} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#057df5',
        tabBarStyle: {
          display: 'flex',
        },
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