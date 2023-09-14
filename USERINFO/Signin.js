import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';

const SigninScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    if (email && password && name) {
      // Store user data in AsyncStorage
      const user = {email, password, name};
      try {
        await AsyncStorage.setItem('user', JSON.stringify(user));
        navigation.navigate('Login');
      } catch (error) {
        console.error('Error storing user data:', error);
      }
    } else {
      // Show validation error
      alert('Fill all fields or invalid data');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'blue', fontSize: 45}}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={text => setName(text)}
        placeholderTextColor="blue"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        placeholderTextColor="blue"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        placeholderTextColor="blue"
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    padding: 10,
    color: 'black',
  },
});

export default SigninScreen;
