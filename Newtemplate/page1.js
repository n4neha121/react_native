import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
const PhoneTemplate = ({navigation}) => {
  const goTonextScreen = () => {
    console.log('fhdg');
    navigation.navigate('Home');
  };
  return (
    <View style={styles.Container}>
      <Image
        source={require('./assets/firstpage.jpeg')}
        resizeMode="contain"
        style={styles.image1}
      />
      <Image
        source={require('./assets/firstpage2.jpeg')}
        resizeMode="contain"
        style={styles.image2}
      />
      <Text>
        Shopping sale is live extra offers on Elevctronics gadgets.go and shop
        now!!
      </Text>
      <TouchableOpacity onPress={goTonextScreen} style={styles.buttonstyle}>
        <Text style={styles.buttontext}>Go & Shop now!</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    //height: '100%',
    //width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    height: 300,
    width: '85%',
    alignSelf: 'center',
  },
  image2: {
    height: 300,
    width: '85%',
    alignSelf: 'center',
  },
  buttonstyle: {
    backgroundColor: '#b942f5',
    height: 75,
    width: '80%',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 65,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    fontSize: 25,
    fontWeight: '700',
    color: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: '300',
    color: '#050505',
  },
});
export default PhoneTemplate;
