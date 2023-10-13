import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const ProductDropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
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

  return (
    <View style={styles.container}>
      <View style={styles.categoryButtons}>
        <TouchableOpacity
          onPress={() => setSelectedCategory('All')}
          style={
            selectedCategory === 'All' ? styles.activeCategory : styles.category
          }>
          <Text style={styles.categoryText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedCategory('Smartphones')}
          style={
            selectedCategory === 'Smartphones'
              ? styles.activeCategory
              : styles.category
          }>
          <Text style={styles.categoryText}>Smartphones</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedCategory('Laptops')}
          style={
            selectedCategory === 'Laptops'
              ? styles.activeCategory
              : styles.category
          }>
          <Text style={styles.categoryText}>Laptops</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {products.map(product => {
          if (
            selectedCategory === 'All' ||
            product.category === selectedCategory
          ) {
            return (
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
                    <Text style={styles.textcolor}>
                      Rating: {product.rating}
                    </Text>
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
                            key={index}
                            source={{uri: image}}
                            style={{
                              width: 100,
                              height: 100,
                              marginTop: 10,
                              marginRight: 10,
                              borderColor: '#000',
                              borderWidth: 1,
                            }}
                          />
                        ))}
                      </ScrollView>
                    </View>
                  </View>
                </View>
              </View>
            );
          }
          return null;
        })}
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
  categoryButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  category: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  activeCategory: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  categoryText: {
    color: 'black',
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
  bold: {color: '#000', fontSize: 16, marginBottom: 8, fontWeight: 'bold'},
});

export default ProductDropdown;
