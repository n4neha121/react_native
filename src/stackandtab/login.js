// LoginScreen.js
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Login = () => {
    navigation.navigate('Tab');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, {color: 'black'}]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, {color: 'black'}]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={Login} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DC143C',
  },
  input: {
    width: '80%',
    padding: 10,
    margin: 10,
    backgroundColor: 'lightpink',
    borderColor: '#2F4F4F',
  },
});

export default LoginScreen;
