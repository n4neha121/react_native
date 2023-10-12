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
          <Text style={styles.buttonText}>Flipkart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttontwo}>
          <Text style={styles.buttext}>Grocery</Text>
        </TouchableOpacity>
      </View>
      <ProductDropdown
        products={selectedProduct === 'All' ? products : [selectedProduct]}
      />
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
