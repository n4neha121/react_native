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
{/*import React, {useState, useEffect} from 'react';
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
import ProductDropdown from './dropdowndata';
//import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Fetch user data from the server using Axios
    axios
      .get('https://dummyjson.com/products') // Replace with your API URL
      .then(response => {
        console.log('Users12:', response?.data?.products);
        setProducts(response.data?.products);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);
  //console.log('fygwqxjrnkmjdjjjjj', products);

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
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={({item}) => {
            console.log(item.id);
            const {
              id,
              title,
              description,
              price,
              discountPercentage,
              rating,
              brand,
              category,
              thumbnail,
            } = item;
            // console.log(`7888:: `, adrs);
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                }}>
                <View style={styles.containerone}>
                  <Text style={styles.textcolor}>
                    Product Id: {id}
                    {'\n'}
                  </Text>
                  <Text style={styles.textcolor}>
                    Product Name: {title}
                    {'\n'}
                  </Text>
                  <Text style={styles.textcolor}>
                    Description: {description}
                    {'\n'}
                  </Text>
                  <Text style={styles.textcolor}>
                    Price:{price}
                    {'\n'}
                  </Text>
                  <Text style={styles.textcolor}>
                    discountPercentage:{discountPercentage}
                    {'\n'}
                  </Text>
                  <Text style={styles.textcolor}>
                    Rating:{rating}
                    {'\n'}
                  </Text>
                  <Text style={styles.textcolor}>
                    brand:{brand}
                    {'\n'}
                  </Text>
                  <Text style={styles.textcolor}>
                    category:{category}
                    {'\n'}
                  </Text>
                  <Text style={styles.textcolor}>
                    Thumbnail:{thumbnail}
                    {'\n'}
                  </Text>
                  <View style={styles.border} />
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ImageBackground>
  );
};
export default Dropdown;
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
  },
  buttontwo: {
    backgroundColor: '#fff',
    height: 40,
    width: '42%',
    top: 20,
    right: 20,
    position: 'absolute',
    borderRadius: 8,
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
*/}
////////////////////////////////////
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const ProductDropdown = ({products}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={products.map(product => ({
          Product_Id: product.id,
          Product_Name: product.title,
          Description: product.description,
          Price: product.price,
          DiscountPercentag: product.discountPercentage,
          Rating: product.rating,
          Brand: product.brand,
          Category: product.Category,
          Thumbnail: product.thumbnail,
        }))}
        setOpen={setOpen}
        setValue={setValue}
        setItems={items => {
          // You need to set the items here, even if it's an empty function
          // to avoid a warning. You can safely use an empty function as shown below.
        }}
      />
      {value && (
        <View style={styles.productDetails}>
          <Text style={styles.textcolor}>
            Product Id: {value.Product_Id} {'\n'}
          </Text>
          <Text style={styles.textcolor}>
            Product Name: {value.Product_Name} {'\n'}
          </Text>
          <Text style={styles.textcolor}>
            Description: {value.Description} {'\n'}
          </Text>
          <Text style={styles.textcolor}>
            Price: {value.Price} {'\n'}
          </Text>
          <Text style={styles.textcolor}>
            Discount: {value.DiscountPercentag} {'\n'}
          </Text>
          <Text style={styles.textcolor}>
            Rating: {value.Rating} {'\n'}
          </Text>
          <Text style={styles.textcolor}>
            Brand: {value.Brand} {'\n'}
          </Text>
          <Text style={styles.textcolor}>
            Category: {value.Category} {'\n'}
          </Text>
          <Text style={styles.textcolor}>
            Thumbnail: {value.Thumbnail} {'\n'}
          </Text>
          {/* Render other product details here */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  textcolor: {
    color: '#000',
    fontSize: 16,
  },
  productDetails: {
    marginTop: 16,
  },
});

export default ProductDropdown;
////////////////////////////////////////////////////
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import ProductDropdown from './dropdowndata';

const Dropdown = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch user data from the server using Axios
    axios
      .get('https://dummyjson.com/products') // Replace with your API URL
      .then(response => {
        console.log('Users12jviblhhhhhhhh:', response?.data?.products);
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

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
      <View>
        {products.map((product, index) => (
          <ProductDropdown key={product.id} product={product} />
        ))}
      </View>
    </ImageBackground>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  Background: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
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
  },
  buttontwo: {
    backgroundColor: '#fff',
    height: 40,
    width: '42%',
    top: 20,
    right: 20,
    position: 'absolute',
    borderRadius: 8,
  },
  buttext: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000',
    fontStyle: 'italic',
    paddingLeft: 45,
    paddingTop: 4,
  },
  // Define other styles here
});
///////////////////////////////
      //////////////////////////////////
      