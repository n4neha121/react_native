import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Categories from '../Categories';
import foods from '../foods';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
const HomeScreen = ({navigation}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState('');
  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}>
        {Categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index ? '#eb8f34' : '#f5ecda',
                ...styles.categoryBtn,
              }}>
              <View style={styles.CategoryBtnImgCon}>
                <Image source={category.image} style={styles.listimg} />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  paddingLeft: 8,
                  color: selectedCategoryIndex == index ? 'white' : '#eb8f34',
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const Card = ({food}) => {
    return (
      <TouchableHighlight
        underlayColor="#fff"
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen', food)}>
        <View style={styles.card}>
          <View style={{alignItems: 'center', top: -40}}>
            <Image
              source={food.image}
              style={{height: 120, width: 120, borderRadius: 60}}
            />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
              {food.Name}
            </Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: 'gray'}}>
              {food.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#000'}}>
              ${food.Price}
            </Text>
            <View style={styles.addToCartBtn}>
              <Icon name="add" size={20} color="#fff" />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={styles.backGround}>
      <View style={styles.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 24, color: '#000'}}>Hello,</Text>
            <Text
              style={{
                fontSize: 24,
                color: '#000',
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              Ariz
            </Text>
          </View>
          <Text style={{color: 'gray', marginTop: 5, fontSize: 20}}>
            What do you want today
          </Text>
        </View>
        <Image
          source={require('../assets/profilepic.jpeg')}
          style={styles.imageSty}
        />
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={styles.inputContainer}>
          <Icon name="search" color="#000" size={28} />
          <TextInput
            placeholder="Search for Food"
            style={styles.textinput}
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.sortbtn}>
          <Icon name="tune" size={28} color="white" />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({item}) => <Card food={item} />}
      />
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imageSty: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textinput: {
    flex: 1,
    fontSize: 18,
  },
  sortbtn: {
    height: 50,
    width: 50,
    marginLeft: 10,
    backgroundColor: '#eb8f34',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoriesListContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    flexDirection: 'row',
    borderRadius: 30,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  CategoryBtnImgCon: {
    height: 40,
    width: 40, //Image icon inside scrollview data
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listimg: {
    height: 32,
    width: 32,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  card: {
    width: cardWidth,
    height: 220,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: 'white',
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#eb8f34',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
