import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const BoardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.FullBackground}>
      <View style={styles.ImagehW}>
        <Image source={require('../assets/OnboardScreen.png')} />
      </View>
      <View>
        <View style={styles.textdet}>
          <Text style={styles.textSty}>Delicious Food</Text>
          <Text style={styles.secText}>
            We help you to find best and delicious food
          </Text>
        </View>
        <View style={styles.indicatorContainer}>
          <View style={styles.currentIndicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>
      </View>
      <View style={styles.buttdet}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.buttonSty}>
          <Text style={styles.buttext}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BoardScreen;
const styles = StyleSheet.create({
  FullBackground: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ImagehW: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    height: '35%',
    resizeMode: 'contain',
    Top: -150,
  },
  textSty: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  textdet: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  secText: {
    color: 'gray',
    fontSize: 22,
    marginTop: 20,
    textAlign: 'center',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingTop: 50,
    marginTop: 50,
  },
  currentIndicator: {
    //Indicator Style
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: '#eb8f34',
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12, //Second Indicator Style
    borderRadius: 6,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  buttonSty: {
    backgroundColor: '#eb8f34',
    height: 60,
    width: '75%',
    borderRadius: 30,
    alignSelf: 'center',
  },
  buttdet: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttext: {
    textAlign: 'center',
    padding: 15,
    alignSelf: 'center',
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});
