import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ProductDropdown from './details';
import {ScrollView} from 'react-native-gesture-handler';

const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
  //console.log('fygwqxjrnkmjdjjjjj', products);

  return (
    <ImageBackground
      source={require('./assets/white.png')}
      style={styles.Background}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Flipkart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttontwo}>
          <Text style={styles.buttext}>Grocery</Text>
        </TouchableOpacity>
      </View>
      <ProductDropdown />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  Background: {
    flex: 1,
  },
  button: {
    backgroundColor: '#4287f5',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 155,
    marginTop: 30,
    marginLeft: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  buttontwo: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 155,
    marginTop: 30,
    marginRight: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttext: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
export default HomeScreen;
