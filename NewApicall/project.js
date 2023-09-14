/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';

const data = [
  {
    name: 'Drawstring Hoodie',
    id: '25/83',
    price: '$50.00',
    image: require('./assets/images.jpeg'), //image path
  },
  {
    name: 'Fashion Hoodie',
    id: '20/18',
    price: '$48.00',
    image: require('./assets/images1.jpeg'),
  },
  {
    name: 'Reebok Hoodie',
    id: '28/45',
    price: '$40.00',
    image: require('./assets/images2.jpeg'),
  },
];

const renderItem = ({item}) => (
  <View style={styles.itemContainer}>
    <Image source={item.image} style={styles.itemImage} resizeMode="center" />
    <View style={styles.itemInfo}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemId}>Item ID: {item.id}</Text>
      <Text style={styles.itemPrice}>Price: {item.price}</Text>
    </View>
  </View>
); //resize mode is used to make an image in center here in render item component all the items are rendered in a list one by one

const ECommerceScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          backgroundColor: 'white', //backgroundcolor of cart
          width: '90%',
          height: '95%',
          paddingHorizontal: 10,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 30, //for text styling
            textAlign: 'center',
          }}>
          Cart
        </Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <View style={styles.staticTextInputContainer}>
          <TextInput
            style={styles.staticInput}
            placeholder="abcdefgh"
            placeholderTextColor="lightgray" //static text input field
            onButtonPress={handleButtonPress}
          />
        </View>
      </View>
    </View>
  );
};
const handleButtonPress = () => {};
//here maincontainer is giving background colour to whole screen
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: '250, 249, 246',
  },
  itemImage: {
    width: 90,
    height: 90,
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
  itemId: {
    fontSize: 13,
    color: 'gray',
  },
  itemPrice: {
    fontSize: 13,
    color: '#000',
    fontWeight: 'bold',
  },
  mainContainer: {
    backgroundColor: '#d1d1d1',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputContainer: {
    borderColor: 'lightgray',
    borderRadius: 5,
  },
  staticInput: {
    height: 60, // Adjust the height as needed
    width: '100%', // Span the entire width of the container
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  staticTextInputContainer: {
    backgroundColor: 'white', // Background color of the static TextInput field
    borderRadius: 5,
    marginVertical: 10, // Adjust spacing as needed
    padding: 10, // Add padding for better appearance
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    margin: 10,
    borderRadius: 5,
  },
});

export default ECommerceScreen;
