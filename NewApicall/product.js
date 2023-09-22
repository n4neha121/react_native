// ProductForm.js
import React, {useState} from 'react';
import {View, Text, TextInput, Button, FlatList} from 'react-native';
import axios from 'axios';

function ProductForm() {
  const [productName, setProductName] = useState('');
  const [categoryID, setCategoryID] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  const handleAddProduct = ({navigation}) => {
    // Create a product object
    axios
      .post('http://192.168.1.125:3300/user/signIn', {
        productName,
        categoryID,
        description,
        price: parseFloat(price),
      })
      .then(response => {
        console.log(response.data);
        navigation.navigate(); //pass the user name as a route parameter
      })
      .catch(error => {
        // Handle login error, e.g., display an error message to the user.
        console.error('Error in Signing in', error);
      });
    const product = {};

    // Add the product to the list
    setProducts([...products, product]);

    // Clear the input fields
    setProductName('');
    setCategoryID('');
    setDescription('');
    setPrice('');
  };

  return (
    <View>
      <Text>Product Name</Text>
      <TextInput
        value={productName}
        onChangeText={setProductName}
        placeholder="Enter product name"
      />

      <Text>Category ID</Text>
      <TextInput
        value={categoryID}
        onChangeText={setCategoryID}
        placeholder="Enter category ID"
      />

      <Text>Description</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
      />

      <Text>Price</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="Enter price"
        keyboardType="numeric"
      />

      <Button title="Add Product" onPress={handleAddProduct} />

      <Text>Product List</Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <View>
            <Text>Product Name: {item.productName}</Text>
            <Text>Category ID: {item.categoryID}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Price: {item.price}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
export default ProductForm;
