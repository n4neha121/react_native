import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const LogoutScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logout</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
  },
});

export default LogoutScreen;
