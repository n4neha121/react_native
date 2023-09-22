import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
const CenteredImage = ({navigation}) => {
  const goTonextScreen = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/centered.jpeg')}
        resizeMode="contain"
        style={styles.image}
      />

      <Text style={styles.firsttext}> Find Your Dream job now!</Text>

      <Text style={styles.secondtext}>
        it does not matter where in the world you are living right now.We will
        get you your dream jobs.
      </Text>

      <TouchableOpacity onPress={goTonextScreen} style={styles.buttonstyle}>
        <Text style={styles.buttontext}>Lets go</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '90%',
    height: '40%',
    alignItems: 'center',
    margin: 10,
    marginTop: 60,
  },
  firsttext: {
    fontSize: 25,
    fontWeight: '800',
    color: '#000',
    textAlign: 'center',
    width: 200,
    height: 80,
    marginBottom: 5,
    marginTop: 20,
  },
  secondtext: {
    fontSize: 15,
    color: '#91908c',
    textAlign: 'center',
    width: 280,
    height: 55,
    marginBottom: 45,
  },
  buttonstyle: {
    backgroundColor: '#4295f5',
    elevation: 8,
    paddingVertical: 10,
    paddingHorizontal: 1,
    marginBottom: 14,
    height: 65,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
  },
  buttontext: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },
});
export default CenteredImage;
