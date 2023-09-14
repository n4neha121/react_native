import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('abc@gmail.com');
  const [password, setPassword] = useState('1234');

  const handleLogin = async () => {
    if (email && password) {
      // Fetch user data from AsyncStorage
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          const user = JSON.parse(userData);
          if (user.email === email && user.password === password) {
            navigation.navigate('HomeTab');
          } else {
            alert('Invalid email or password');
          }
        } else {
          alert('User not found');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    } else {
      alert('Fill all fields or invalid data');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'blue', fontSize: 35}}>
        Welcome TO Matrix Media Solutions Pvt Ltd.
      </Text>
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
      <Button title="Login" onPress={handleLogin} />
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
    color: 'blue',
  },
});

export default LoginScreen;
