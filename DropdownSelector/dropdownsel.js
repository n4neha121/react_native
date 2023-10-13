import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import axios from 'axios';
import ProductDropdown from './dropdowndata';
//import BottomTabs from './BottomNav';
//import ProductDropdownPicker from './Dropdownpicker';

const Dropdown = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Fetch product data from the server using Axios
    axios
      .get('https://dummyjson.com/products') // Replace with your API URL
      .then(response => {
        console.log('Products:', response?.data?.products);
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  return (
    <ImageBackground
      source={require('./assets/background.jpeg')}
      style={styles.Background}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity style={styles.button}>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginLeft: 30, marginTop: 5}}>
              <Image
                source={require('./assets/flipkart.jpeg')}
                style={styles.image1}
              />
            </View>
            <Text style={styles.buttonText}> Flipkart</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttontwo}>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginLeft: 30}}>
              <Image
                source={require('./assets/grocery.jpeg')}
                style={styles.image2}
              />
            </View>
            <Text style={styles.buttext}> Grocery</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ProductDropdown
        products={selectedProduct === 'All' ? products : [selectedProduct]}
      />
    </ImageBackground>
  );
};
{
  /* <Image
        source={require('./assets/sale.jpeg')}
        style={{height: 250, width: '100%', marginTop: 40}}
/>*/
}
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
    //paddingLeft: 45,
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
    marginleft: 5,
  },
  buttext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    fontStyle: 'italic',
    //paddingLeft: 45,
    marginTop: 5,
  },
  image1: {
    height: 22,
    width: 22,
    paddingRight: 10,
    borderRadius: 6,
    marginTop: 2,
  },
  image2: {
    height: 22,
    width: 22,
    paddingRight: 10,
    borderRadius: 6,
    marginTop: 6,
  },
  // Define other styles here
});
