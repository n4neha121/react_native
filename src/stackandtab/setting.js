// SettingsScreen.js
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const SettingsScreen = ({navigation}) => {
  const Logout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textinput}>Settings Screen</Text>
      <Button title="Logout" onPress={Logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFCCFF',
  },
  textinput: {
    color: '#000',
    fontSize: 50,
  },
});

export default SettingsScreen;
