import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet, //all the useful libraries are imported acc to requirement
  TextInput,
  TouchableOpacity,
} from 'react-native';

const data = [
  {
    name: 'Drawstring Hoodie',
    id: '25/83',
    price: '$50.00',
    image: require('./assets/images.jpeg'), // image path
    images1: require('./assets/plus.png'),
    images2: require('./assets/minus.png'), //also icon path has been added in it
  },
  {
    name: 'Fashion Hoodie',
    id: '20/18',
    price: '$48.00',
    image: require('./assets/images1.jpeg'),
    images1: require('./assets/plus.png'),
    images2: require('./assets/minus.png'), //same for each objects details
  },
  {
    name: 'Reebok Hoodie',
    id: '28/45',
    price: '$40.00',
    image: require('./assets/images2.jpeg'),
    images1: require('./assets/plus.png'),
    images2: require('./assets/minus.png'),
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
    <View style={styles.rightContent}>
      <Image
        source={item.images2}
        style={styles.smallImage}
        resizeMode="center"
      />
      <Text style={styles.centerText}>01</Text>
      <Image
        source={item.images1}
        style={styles.smallImage}
        resizeMode="center"
      />
    </View>
  </View>
);
//in the above code item.image is taking each image as given in the code for rendering each imafge in each part in a list
const ECommerceScreen = () => {
  const [textInputValue, setTextInputValue] = useState('');

  const handleButtonClick = () => {
    console.log('Text Input Value:', textInputValue);
  };
  const newbutton = () => {};

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <Image
          source={require('./assets/header.png')} // Header icon
          style={styles.headerIcon} //header icon size ,height width everything is given in this styling
        />
        <Text style={styles.headerText}>Cart</Text>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flatList}
        />
        <View style={styles.inputButtonContainer}>
          <TextInput
            placeholder="promocode"
            style={styles.textInput}
            value={textInputValue}
            onChangeText={text => setTextInputValue(text)}
            placeholderTextColor="gray"
          />
          <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
            <Text style={styles.buttonText}>Apply</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowWithBorder}>
          <Text style={styles.leftText}>Order Amount</Text>
          <Text style={styles.rightText}>$138.00</Text>
        </View>
        <View style={styles.rowWithBorder}>
          <Text style={styles.leftText}>Tax</Text>
          <Text style={styles.rightText}>$10.00</Text>
        </View>
        <View style={styles.rowWithBorder}>
          <Text style={styles.leftText}>Total payment</Text>
          <Text style={styles.rightText}>$148.00</Text>
        </View>
        <TouchableOpacity style={styles.secButton} onPress={newbutton}>
          <Text style={styles.buttonText}>Proceed To Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white', // Screen background color
  },
  headerContainer: {
    flexDirection: 'row', //here header  all the display description is present
    alignItems: 'center',
    marginLeft: 10, // Adjust the margin as needed
    backgroundColor: 'white', // Header background color
    paddingVertical: 10,
  },
  headerIcon: {
    width: 25, // Adjust the header icon size as needed
    height: 25, // Adjust the header icon size as needed
    marginRight: 105, // Adjust the margin as needed
  },
  headerText: {
    color: '#000',
    fontSize: 30, //text color
  },
  flatListContainer: {
    backgroundColor: 'white', // FlatList background color
  },
  flatList: {
    marginTop: 10, //margin of flatlist component that should be after space from the top
  },
  itemContainer: {
    flexDirection: 'row', //here item container is fixing view of flatlist where each item in a flatlist should be in row
    alignItems: 'center', //alignitems in center
    padding: 10, // borderwidth of each items is set to 1
    borderBottomWidth: 1,
    borderColor: 'lightgray', //bordercolor is gray
    backgroundColor: '250, 249, 246',
  },
  itemImage: {
    width: 90,
    height: 90, //in this styling it is shown that how image will be displayed in a list means its
    borderRadius: 5, //height,width,borderRadius,margin,borderwidth and all the styling which an image should have
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 13, //in this the first text is in bold its all the description is given in this
    fontWeight: 'bold',
    color: '#000',
  },
  itemId: {
    fontSize: 13,
    color: 'gray', //in this item id display description of item id is given
  },
  itemPrice: {
    fontSize: 13,
    color: '#000',
    fontWeight: 'bold', //in this item price display description of item price is given
  },
  inputButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', //in this the button overall display description is mentioned that
    //their should be space between button and input field it should be in row
    marginTop: 20,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10, //text input design description is given which means its border colour height width border
    //radius padding etc.
    marginRight: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'black', // Set button background color to white
    borderRadius: 10,
    paddingVertical: 10, //button all display contents
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white', // Set button text color to black
    fontWeight: 'bold',
    fontSize: 16, //text inside button description is mentioned in it
    textAlign: 'center',
  },
  rowWithBorder: {
    flexDirection: 'row', //in this the whole description of border is given means the text below the button and
    justifyContent: 'space-between', //text is given that text should have a border after each text so to adjust its all sixze display
    alignItems: 'center', //we are adjusting its display here
    borderBottomWidth: 1,
    borderColor: 'lightgray', // Add the border color here
    paddingVertical: 10,
  },
  leftText: {
    color: 'black',
    marginRight: 60, //in this text at left display design is given
    fontWeight: 'bold',
    marginHorizontal: 25,
    fontSize: 15,
  },
  rightText: {
    color: 'black',
    marginLeft: 93, // in this text at right display design is given
    marginHorizontal: 25,
    fontWeight: 'bold',
  },
  secButton: {
    backgroundColor: 'black', // Set button background color to white
    borderRadius: 20,
    marginTop: 50,
    height: 65,
    width: '90%',
    justifyContent: 'center', //newbutton styling and designing is given
    alignItems: 'center',
    marginLeft: 15,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center', // in this the plus minus and text display info is given where flex is in row direction
    marginLeft: 'auto', // all the items alignment is in center
    marginRight: 18,
  },
  smallImage: {
    width: 20, // Adjust the width as needed
    height: 20, // Adjust the height as needed
    marginRight: 5,
    marginLeft: 5, //in this image margin is adjusted
  },
  centerText: {
    color: 'black',
    fontWeight: 'bold', // here the text between the two (+,-) icon is adjusted
    fontSize: 12,
  },
});

export default ECommerceScreen;
