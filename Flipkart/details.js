// ProductDetailScreen.js

import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const ProductDetailScreen = ({route}) => {
  const {product} = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={{uri: product.thumbnail}} style={styles.image} />
        <Text style={styles.title}>{product.title}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.price1}>Price: </Text>
          <Text style={styles.price}> ${product.price}</Text>
        </View>
        <Text style={styles.text}>Ratings:{product.rating}</Text>
        <Text style={styles.text}>Discount: {product.discountPercentage}%</Text>
        <Text style={styles.text}> Brand: {product.brand}</Text>
        <Text style={styles.text}> Category: {product.category}</Text>
        <Text style={styles.description}>
          description: {product.description}
        </Text>
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
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              }}
            />
          ))}
        </ScrollView>
        <Text> {'\n'} </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 300,
    height: 300,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 22,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  description: {
    fontSize: 18,
    marginHorizontal: 20,
    color: '#000',
  },
  price: {
    fontSize: 18,
    marginVertical: 10,
    color: 'darkgreen',
  },
  price1: {
    fontSize: 18,
    marginVertical: 10,
    color: 'black',
  },
  text: {
    color: '#000',
    fontSize: 18,
    marginVertical: 10,
  },
});

export default ProductDetailScreen;
