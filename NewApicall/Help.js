import React from 'react-native';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
const Flatimage = () => {
  const data = [
    {
      id: 1,
      title: 'beautiful temple',
      imageUrl:
        'https://www.shutterstock.com/shutterstock/photos/2039819639/display_1500/stock-vector-traditional-hindu-temple-with-red-flag-isolated-north-indian-style-hindu-temple-2039819639.jpg',
    },
    {
      id: 2,
      title: 'beautiful nature',
      imageUrl:
        'https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg',
    },
    {
      id: 3,
      title: 'beautiful mountain',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ITkW2h5AWC-85wceFs53IMLn7TRLA1oguctYJDcO&s',
    },
    {
      id: 4,
      title: 'beautiful water',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPclXVJXmu707LRLOzPuxbbNQ9JvQUe7KDbg6jcvS&s',
    },
    {
      id: 5,
      title: 'beautiful temple',
      imageUrl:
        'https://www.shutterstock.com/shutterstock/photos/2039819639/display_1500/stock-vector-traditional-hindu-temple-with-red-flag-isolated-north-indian-style-hindu-temple-2039819639.jpg',
    },
    {
      id: 6,
      title: 'beautiful temple',
      imageUrl:
        'https://www.shutterstock.com/shutterstock/photos/2039819639/display_1500/stock-vector-traditional-hindu-temple-with-red-flag-isolated-north-indian-style-hindu-temple-2039819639.jpg',
    },
    {
      id: 7,
      title: 'beautiful temple',
      imageUrl:
        'https://www.shutterstock.com/shutterstock/photos/2039819639/display_1500/stock-vector-traditional-hindu-temple-with-red-flag-isolated-north-indian-style-hindu-temple-2039819639.jpg',
    },
  ];

  return (
    <SafeAreaView>
      <Text style={{color: '#fff'}}>FlatList</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <Image
              source={{uri: item.imageUrl}}
              style={{height: 200, width: 400}}
            />
            <Text style={styles.text}>{item.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    color: '#fff',
    borderColor: 'red',
  },
});
export default Flatimage;
