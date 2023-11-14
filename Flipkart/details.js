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
  const [searchText, setSearchText] = useState(''); //useeffect for searching products
  const [selectedCategory, setSelectedCategory] = useState('all'); //for displaying all data
  const [categories, setCategories] = useState([]); //for the categories selection
  const [products, setProducts] = useState([]); // to display all products
  const [filteredProducts, setFilteredProducts] = useState([]); // for filtering products

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(response => {
        console.log('Products:', response?.data?.products);
        setProducts(response.data.products);
      }) //api call to fetch data
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter(
      (
        product, //in this logic the products are being filtered here bcz each data will be filtered // here in this the selected category have fixed in to the all where all the products data will be visible //based on product category the data will be visible
      ) =>
        ((selectedCategory === 'all' ||
          product.category
            .toLowerCase() //also can search with lowercase then also the data would be visible
            .includes(selectedCategory.toLowerCase())) &&
          (searchText === '' || //in search text the product name will be searched then only that product data will get display in the screen also can search in lowercase also
            product.title.toLowerCase().includes(searchText.toLowerCase()))) ||
        searchText === '' || //in search text the product name will be searched then only that product data will get display in the screen also can search in lowercase also
        product.category.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredProducts(filtered); //filtered component to filter data of products
  }, [searchText, selectedCategory, products]);

  const handleCategoryClick = category => {
    setSelectedCategory(category); //component for category select
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Products"
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
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
  bold: {color: '#000', fontSize: 16, marginBottom: 8, fontWeight: 'bold'},
  input: {
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'gray',
  },
  container: {
    padding: 10,
  },
  categoryText: {
    color: 'blue',
    fontSize: 16,
    marginBottom: 8,
    textDecorationLine: 'underline',
  },
});

export default ProductDropdown;
//why categories categories are not getting filtered in textinput and not displaying
