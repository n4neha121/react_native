import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import Dropdown from './DropdownSelector/dropdownsel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SecondIcon from 'react-native-vector-icons/SimpleLineIcons';
import ThirdIcon from 'react-native-vector-icons/EvilIcons';
import CartScreen from './DropdownSelector/CartScreen';
import Notification from './DropdownSelector/Notification';
import Account from './DropdownSelector/Account';
import Categories from './DropdownSelector/Categories';

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
        <Stack.Screen name="dropdown" component={DropdownWithTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const DropdownWithTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {height: 55, borderTopWidth: 0, elevation: 0},
        //showLabel: false,
        activeTintColor: '#057df5',
      }}>
      <Tab.Screen
        name="Home"
        component={Dropdown}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={30} color={color} />,
          headerShown: false, //if want to make headershown false for a particular tabscreen place headershown false in the tabscreen
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="category" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notification}
        options={{
          tabBarIcon: ({color}) => (
            <SecondIcon name="bell" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Accounts"
        component={Account}
        options={{
          tabBarIcon: ({color}) => (
            <ThirdIcon name="user" color={color} size={34} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
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

const HomeScreen = () => {
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
      <FlatList
        horizontal
        data={products}
        renderItem={({item}) => {
          console.log(item.id);
          const {thumbnail} = item;
          // console.log(`7888:: `, adrs);
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 2,
                paddingTop: 70,
              }}>
              <Image
                source={{uri: thumbnail}}
                style={{
                  width: 500,
                  height: 200,
                  marginTop: 10,
                  marginRight: 5,
                  borderWidth: 1,
                  borderColor: '#000',
                  resizeMode: 'contain',
                }}
              />
            </View>
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
/////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';

const ProductDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [value, setValue] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(response => {
        console.log('Products:', response?.data?.products);
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(product => {
          if (selectedCategory === 'Smartphones') {
            return product.id >= 1 && product.id <= 5;
          } else if (selectedCategory === 'Laptops') {
            return product.id >= 6 && product.id <= 10;
          }
        });

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={selectedCategory}
        items={[
          {label: 'All', value: 'All'},
          {label: 'Smartphones', value: 'Smartphones'},
          {label: 'Laptops', value: 'Laptops'},
        ]}
        placeholder="Categories"
        style={{maxHeight: 50}}
        setOpen={setOpen}
        setValue={setSelectedCategory}
        setItems={() => {}}
      />
      <ScrollView>
        <View style={styles.BackgrundContainer}>
          {filteredProducts.map(product => (
            <View style={styles.productDetails} key={product.id}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={{uri: product.thumbnail}} // Use source to display images
                  style={{
                    width: 100,
                    height: 100,
                    marginTop: 10,
                    marginRight: 5,
                  }} // Set appropriate width and height
                />
                <View style={{paddingTop: 15}}>
                  <Text style={styles.textcolor}>
                    Product Name: {product.title}
                  </Text>
                  <Text style={styles.textcolor}>
                    Description: {product.description}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textcolor}>Price: </Text>
                    <Text style={styles.bold}> {product.price}</Text>
                  </View>
                  <Text style={styles.textcolor}>
                    Discount Percentage: {product.discountPercentage}
                  </Text>
                  <Text style={styles.textcolor}>Rating: {product.rating}</Text>
                  <Text style={styles.textcolor}>Brand: {product.brand}</Text>
                  <Text style={styles.textcolor}>
                    Category: {product.category}
                  </Text>
                  <Text style={styles.textcolor}>
                    Thumbnail: {product.thumbnail}
                    {'\n'}{' '}
                  </Text>
                  <Text style={styles.textcolor}>Images:</Text>
                  <View style={{flexDirection: 'row'}}>
                    <ScrollView horizontal={true}>
                      <Image
                        source={{uri: product.images[0]}} // Use source to display images
                        style={{
                          width: 100,
                          height: 100,
                          marginTop: 10,
                          marginRight: 10,
                          borderColor: '#000',
                          borderWidth: 1,
                        }} // Set appropriate width and height
                      />
                      <Image
                        source={{uri: product.images[1]}} // Use source to display images
                        style={{
                          width: 100,
                          height: 100,
                          marginTop: 10,
                          marginRight: 10,
                          borderColor: '#000',
                          borderWidth: 1,
                        }} // Set appropriate width and height
                      />
                      <Image
                        source={{uri: product.images[2]}} // Use source to display images
                        style={{
                          width: 100,
                          height: 100,
                          marginTop: 10,
                          marginRight: 10,
                          borderColor: '#000',
                          borderWidth: 1,
                        }} // Set appropriate width and height
                      />
                      <Image
                        source={{uri: product.images[3]}} // Use source to display images
                        style={{
                          width: 100,
                          height: 100,
                          marginTop: 10,
                          marginRight: 10,
                          borderColor: '#000',
                          borderWidth: 1,
                        }} // Set appropriate width and height
                      />
                      <Image
                        source={{uri: product.images[4]}} // Use source to display images
                        style={{
                          width: 100,
                          height: 100,
                          marginTop: 10,
                          marginRight: 10,
                          borderColor: '#000',
                          borderWidth: 1,
                        }} // Set appropriate width and height
                      />
                    </ScrollView>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 100,
    flex: 1,
  },
  textcolor: {
    color: '#000',
    fontSize: 16,
    marginBottom: 8,
  },
  productDetails: {
    borderBottomWidth: 2,
    borderColor: 'gray',
    paddingBottom: 16,
  },
  BackgrundContainer: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  bold: {color: '#000', fontSize: 16, marginBottom: 8, fontWeight: 'bold'},
});

export default ProductDropdown;
///////////////////////////////////////////////
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const ProductSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Fetch products from the API
    axios
      .get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  const handleCategoryClick = category => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Products"
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
      <ScrollView>
        {selectedCategory === 'All'
          ? products
          : products
              .filter(
                product =>
                  product.category.toLowerCase() ===
                  selectedCategory.toLowerCase(),
              )
              .filter(product => {
                const lowercaseSearchText = searchText.toLowerCase();
                const lowercaseCategory = product.category.toLowerCase();
                const lowercaseTitle = product.title.toLowerCase();
                return (
                  lowercaseCategory.includes(lowercaseSearchText) ||
                  lowercaseTitle.includes(lowercaseSearchText)
                );
              })
              .map(product => (
                <TouchableOpacity key={product.id} style={styles.product}>
                  <Text>{product.title}</Text>
                  <Text>{product.category}</Text>
                  {/ Add more product information here /}
                </TouchableOpacity>
              ))}
      </ScrollView>
      <View style={styles.categories}>
        <Text
          style={
            selectedCategory === 'All'
              ? styles.selectedCategory
              : styles.category
          }
          onPress={() => handleCategoryClick('All')}>
          All
        </Text>
        {/ Add more category options here /}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  product: {
    borderBottomWidth: 2,
    borderColor: 'gray',
    paddingBottom: 16,
    marginBottom: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  category: {
    color: 'gray',
  },
  selectedCategory: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ProductSearch;





import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import axios from 'axios';

const ProductDropdown = () => {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState(''); // Add category state
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch data only when a search is performed
  useEffect(() => {
    if (searchText || category) {
      axios
        .get('https://dummyjson.com/products')
        .then(response => {
          console.log('Products:', response?.data?.products);
          setProducts(response.data.products);
        })
        .catch(error => {
          console.error('Error fetching product data:', error);
        });
    }
  }, [searchText, category]);

  // Update filteredProducts when searchText or category changes
  useEffect(() => {
    const filtered = products.filter(
      product =>
        (category === 'all' ||
          product.category.toLowerCase().includes(category.toLowerCase())) &&
        (searchText === '' ||
          product.title.toLowerCase().includes(searchText.toLowerCase())),
    );
    setFilteredProducts(filtered);
  }, [searchText, category, products]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by Category"
        onChangeText={text => setCategory(text)}
        value={category}
        placeholderTextColor="gray"
      />
      <ScrollView>
        {filteredProducts.map(product => (
          <View style={styles.productDetails} key={product.id}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={{uri: product.thumbnail}}
                style={{
                  width: 100,
                  height: 100,
                  marginTop: 10,
                  marginRight: 5,
                }}
              />
              <View style={{paddingTop: 15}}>
                <Text style={styles.textcolor}>
                  Product Name: {product.title}
                </Text>
                <Text style={styles.textcolor}>
                  Description: {product.description}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textcolor}>Price: </Text>
                  <Text style={styles.bold}> {product.price}</Text>
                </View>
                <Text style={styles.textcolor}>
                  Discount Percentage: {product.discountPercentage}
                </Text>
                <Text style={styles.textcolor}>Rating: {product.rating}</Text>
                <Text style={styles.textcolor}>Brand: {product.brand}</Text>
                <Text style={styles.textcolor}>
                  Category: {product.category}
                </Text>
                <Text style={styles.textcolor}>
                  Thumbnail: {product.thumbnail}
                </Text>
                <Text style={styles.textcolor}>Images:</Text>
                <View style={{flexDirection: 'row'}}>
                  <ScrollView horizontal={true}>
                    {product.images.map((image, index) => (
                      <Image
                        source={{uri: image}}
                        style={{
                          width: 100,
                          height: 100,
                          marginTop: 10,
                          marginRight: 10,
                          borderColor: '#000',
                          borderWidth: 1,
                        }}
                        key={index}
                      />
                    ))}
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 50,
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: 'gray',
  },
  productDetails: {
    borderBottomWidth: 2,
    borderColor: 'gray',
    paddingBottom: 16,
  },
  bold: {color: '#000', fontSize: 16, marginBottom: 8, fontWeight: 'bold'},
  textcolor: {color: '#000'}, // Add this style definition
});

export default ProductDropdown;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';

import axios from 'axios';

const ProductDropdown = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(response => {
        console.log('Products:', response?.data?.products);
        setProducts(response.data.products);

        const uniqueCategories = [
          'all',
          ...new Set(response.data.products.map(product => product.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter(
      product =>
        (selectedCategory === 'all' ||
          product.category
            .toLowerCase()
            .includes(selectedCategory.toLowerCase())) &&
        (searchText === '' ||
          product.title.toLowerCase().includes(searchText.toLowerCase())),
    );
    setFilteredProducts(filtered);
  }, [searchText, selectedCategory, products]);

  const handleCategoryClick = category => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by Product Title"
        onChangeText={text => setSearchText(text)}
        value={searchText}
        placeholderTextColor="gray"
      />

      <ScrollView>
        {categories.map((category, index) => (
          <Text
            key={index}
            style={styles.categoryText}
            onPress={() => handleCategoryClick(category)} // Add this onPress handler
          >
            {category}
          </Text>
        ))}
      </ScrollView>

      <ScrollView>s
        {filteredProducts.map(product => (
          <View style={styles.productDetails} key={product.id}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={{uri: product.thumbnail}}
                style={{
                  width: 100,
                  height: 100,
                  marginTop: 10,
                  marginRight: 5,
                }}
              />
              <View style={{paddingTop: 15}}>
                <Text style={styles.textcolor}>
                  Product Name: {product.title}
                </Text>
                <Text style={styles.textcolor}>
                  Description: {product.description}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textcolor}>Price: </Text>
                  <Text style={styles.bold}> {product.price}</Text>
                </View>
                <Text style={styles.textcolor}>
                  Discount Percentage: {product.discountPercentage}
                </Text>
                <Text style={styles.textcolor}>Rating: {product.rating}</Text>
                <Text style={styles.textcolor}>Brand: {product.brand}</Text>
                <Text style={styles.textcolor}>
                  Category: {product.category}
                </Text>
                <Text style={styles.textcolor}>
                  Thumbnail: {product.thumbnail}
                </Text>
                <Text style={styles.textcolor}>Images:</Text>
                <View style={{flexDirection: 'row'}}>
                  <ScrollView horizontal={true}>
                    {product.images.map((image, index) => (
                      <Image
                        source={{uri: image}}
                        style={{
                          width: 100,
                          height: 100,
                          marginTop: 10,
                          marginRight: 10,
                          borderColor: '#000',
                          borderWidth: 1,
                        }}
                        key={index}
                      />
                    ))}
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 50,
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: 'gray',
  },
  categoryText: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 5,
    color: '#000',
  },
  productDetails: {
    borderBottomWidth: 2,
    borderColor: 'gray',
    paddingBottom: 16,
  },
  bold: {color: '#000', fontSize: 16, marginBottom: 8, fontWeight: 'bold'},
  textcolor: {color: '#000'},
});

export default ProductDropdown;
//////////////////////////////////
return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by Product Title"
        onChangeText={text => setSearchText(text)}
        value={searchText}
        placeholderTextColor="gray"
      />

      <ScrollView>
        {categories.map((category, index) => (
          <Text
            key={index}
            style={styles.categoryText}
            onPress={() => handleCategoryClick(category)} // Add this onPress handler
          >
            {category}
          </Text>
        ))}
      </ScrollView>

      <ScrollView>
        {filteredProducts.map(product => (
          <View style={styles.productDetails} key={product.id}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={{uri: product.thumbnail}}
                style={{
                  width: 100,
                  height: 100,
                  marginTop: 10,
                  marginRight: 5,
                }}
              />
              <View style={{paddingTop: 15}}>
                <Text style={styles.textcolor}>
                  Product Name: {product.title}
                </Text>
                <Text style={styles.textcolor}>
                  Description: {product.description}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textcolor}>Price: </Text>
                  <Text style={styles.bold}> {product.price}</Text>
                </View>
                <Text style={styles.textcolor}>
                  Discount Percentage: {product.discountPercentage}
                </Text>
                <Text style={styles.textcolor}>Rating: {product.rating}</Text>
                <Text style={styles.textcolor}>Brand: {product.brand}</Text>
                <Text style={styles.textcolor}>
                  Category: {product.category}
                </Text>
                <Text style={styles.textcolor}>
                  Thumbnail: {product.thumbnail}
                </Text>
                <Text style={styles.textcolor}>Images:</Text>
                <View style={{flexDirection: 'row'}}>
                  <ScrollView horizontal={true}>
                    {product.images.map((image, index) => (
                      <Image
                        source={{uri: image}}
                        style={{
                          width: 100,
                          height: 100,
                          marginTop: 10,
                          marginRight: 10,
                          borderColor: '#000',
                          borderWidth: 1,
                        }}
                        key={index}
                      />
                    ))}
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );