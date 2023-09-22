import React, {useState} from 'react';
import {View, Text, FlatList, Image, StyleSheet, TextInput} from 'react-native';

const data = [
  {
    id: '1',
    name: 'App Designer',
    image: require('./assets/graphics.png'), //all objects images for flatlist
  },
  {
    id: '2',
    name: 'Web Designer',
    image: require('./assets/iphone.jpeg'),
  },
  {
    id: '3',
    name: 'Graphics Designer',
    image: require('./assets/laptop.jpeg'),
  },
  {
    id: '4',
    name: 'Screen designer',
    image: require('./assets/Tablet.jpeg'),
  },
  {
    id: '5',
    name: 'tab designer',
    image: require('./assets/phone.png'),
  },
  {
    id: '6',
    name: 'xyz Designer',
    image: require('./assets/mac.jpeg'),
  },
];

const renderItem = ({item}) => (
  <View style={styles.itemContainer}>
    <Image source={item.image} resizeMode="contain" style={styles.images} />
    <View style={styles.itemInfo}>
      <Text style={styles.itemName}>{item.name}</Text>
    </View>
  </View>
);

const HomeScreen = () => {
  const [textinput, setTextinput] = useState('');

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <Image
          source={require('./assets/icon.png')} //image path for header icon
          style={styles.headerIcon}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText1}>Hello,</Text>
          <Text style={styles.headerText2}>Saber Ali</Text>
        </View>
      </View>
      <View style={styles.inputButtonContainer}>
        <TextInput
          placeholder="promocode"
          style={styles.textInput}
          value={textinput}
          onChangeText={text => setTextinput(text)}
          placeholderTextColor="gray"
        />
        <View style={styles.rowWithBorder}>
          <Text style={styles.text1}>Categories</Text>
          <Text style={styles.text2}>View all</Text>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.flatlist}
            horizontal={true}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 103,
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  headerTextContainer: {
    marginLeft: 10,
    flex: 1, // Added flex: 1 to take available space
  },
  text1: {
    color: 'black',
    marginRight: 60,
    fontWeight: 'bold',
    marginHorizontal: 25,
    fontSize: 20,
  },
  text2: {
    color: '#4295f5',
    marginLeft: 93,
    marginHorizontal: 25,
    fontWeight: '300',
    fontSize: 14,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  images: {
    height: 30,
    width: 30,
    borderRadius: 5,
    marginRight: 10,
  },
  rowWithBorder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  flatlist: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f5f5f5',
  },
  headerIcon: {
    width: 25,
    height: 25,
    marginLeft: 10, // Adjusted marginLeft
    marginTop: 20,
  },
  headerText1: {
    color: 'lightgray',
    fontWeight: '700',
    fontSize: 15,
    marginTop: 20,
  },
  headerText2: {
    color: '#000',
    fontSize: 23,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  itemInfo: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'rgb(250, 249, 246)',
  },
});

export default HomeScreen;
