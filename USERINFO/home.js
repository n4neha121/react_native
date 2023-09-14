// Home.js

// Home.js
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.textinput}>
      <Text style={{color: 'blue', fontSize: 35}}>
        Welcome to Matrix Media Solutions Pvt Ltd
      </Text>
      {/* Add other content and buttons as needed */}
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};
const styles = StyleSheet.create({
  textinput: {
    backgroundColor: 'lightblue',
    flex: 1,
  },
});
export default Home;
