import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
const ProductDropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [products, setProducts] = useState([]);
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
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={products.map(item => ({
          label: item.title,
          value: item,
        }))}
        placeholder="Categories"
        style={{maxHeight: 50}}
        setOpen={setOpen}
        setValue={setValue}
        setItems={() => {}}
      />
      {value && (
        <View style={styles.productDetails}>
          <Text style={styles.textcolor}>
            Product Id: {value.id}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Product Name: {value.title}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Description: {value.description}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Price: {value.price}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Discount Percentage: {value.discountPercentage}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Rating: {value.rating}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Brand: {value.brand}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Category: {value.category}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Thumbnail: {value.thumbnail}
            {'\n'}{' '}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 100,
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
///////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';

const ProductDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
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
  const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={selectedCategory}
        items={[
          { label: 'All', value: 'All' },
          { label: 'Smartphones', value: 'Smartphones' },
          { label: 'Laptops', value: 'Laptops' },
        ]}
        placeholder="Categories"
        style={{ maxHeight: 50 }}
        setOpen={setOpen}
        setValue={setSelectedCategory}
        setItems={() => {}}
      />
      <ScrollView>
        {filteredProducts.map(product => (
          <View style={styles.productDetails} key={product.id}>
            <Text style={styles.textcolor}>Product Id: {product.id}</Text>
            <Text style={styles.textcolor}>Product Name: {product.title}</Text>
            <Text style={styles.textcolor}>Description: {product.description}</Text>
            <Text style={styles.textcolor}>Price: {product.price}</Text>
            <Text style={styles.textcolor}>Discount Percentage: {product.discountPercentage}</Text>
            <Text style={styles.textcolor}>Rating: {product.rating}</Text>
            <Text style={styles.textcolor}>Brand: {product.brand}</Text>
            <Text style={styles.textcolor}>Category: {product.category}</Text>
            <Text style={styles.textcolor}>Thumbnail: {product.thumbnail}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 100,
  },
  textcolor: {
    color: '#000',
    fontSize: 16,
    marginBottom: 8,
  },
  productDetails: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 16,
  },
});

export default ProductDropdown;
/////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';

const ProductDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All'); // Initialize category to "All"
  const [value, setValue] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the server using Axios
    axios
      .get('https://dummyjson.com/products') // Replace with your API URL
      .then(response => {
        console.log('Products:', response?.data?.products);
        setProducts(response.data.products);
        setFilteredProducts(response.data.products); // Initialize filteredProducts with all products
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  useEffect(() => {
    // Filter products based on the selected category
    if (selectedCategory === 'All') {
      setFilteredProducts(products); // Show all products
    } else if (selectedCategory === 'Smartphones') {
      const filtered = products.filter(product => product.category === 'Smartphones');
      setFilteredProducts(filtered);
    } else if (selectedCategory === 'Laptops') {
      const filtered = products.filter(product => product.category === 'Laptops');
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={selectedCategory}
        items={[
          { label: 'All', value: 'All' },
          { label: 'Smartphones', value: 'Smartphones' },
          { label: 'Laptops', value: 'Laptops' },
        ]}
        placeholder="Categories"
        style={{ maxHeight: 50 }}
        setOpen={setOpen}
        setValue={setSelectedCategory}
        setItems={() => {}}
      />
      {selectedCategory !== 'All' && (
        <DropDownPicker
          open={open}
          value={value}
          items={filteredProducts.map(item => ({
            label: item.title,
            value: item,
          }))}
          placeholder="Select a product"
          style={{ maxHeight: 50 }}
          setOpen={setOpen}
          setValue={setValue}
          setItems={() => {}}
        />
      )}
      {value && (
        <View style={styles.productDetails}>
          <Text style={styles.textcolor}>
            Product Id: {value.id}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Product Name: {value.title}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Description: {value.description}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Price: {value.price}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Discount Percentage: {value.discountPercentage}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Rating: {value.rating}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Brand: {value.brand}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Category: {value.category}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Thumbnail: {value.thumbnail}
            {'\n'}{' '}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 100,
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
///////////////////////////////////////////////////////////////////////////////////////////////////////
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
