import axios from 'axios';
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
axios
  .post('http://aliporemuseum.demoyourprojects.com/api/audioFetch', {})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
const Home = ({navigation}) => {
  return (
    <View>
      <Text style={styles.texts}>
        Welcome to Matrix Media Solutions Pvt Ltd
      </Text>
      {/* Add other content and buttons as needed */}
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};
const styles = StyleSheet.create({
  texts: {
    fontSize: 35,
    color: 'blue',
    marginBottom: 20,
  },
});
export default Home;
