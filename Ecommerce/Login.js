import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import axios from 'axios';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validation: Check if email and password are not empty
    if (!email || !password) {
      Alert.alert('Please fill in all fields.');
      return;
    }

    // Create an object with login data
    const loginData = {
      email: email,
      password: password,
    };

    // Make a POST request to your backend API for login
    axios
      .post('https://empathy.yourcloudnetwork.net/api/auth/sign_in', null, {
        params: loginData,
      })
      .then(function (response) {
        if (response.status >= 200 && response.status <= 299) {
          // Successful login, you can navigate to your main app screen here
          // For this example, we'll show an alert message
          Alert.alert('Login Successful');
          navigation.navigate('postmethod');
        } else {
          console.error('Unexpected response status:', response.status);
          Alert.alert('Login failed. Please check your credentials.');
        }
      })
      .catch(function (error) {
        console.error(error);
        if (error?.response?.data?.message) {
          Alert.alert(error?.response?.data?.message);
        } else {
          Alert.alert('Login failed. Please try again.');
        }
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          onChangeText={text => setEmail(text)}
          placeholderTextColor="blue"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          placeholderTextColor="blue"
        />
      </View>
      <Button title="Login" onPress={handleLogin} color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  inputContainer: {
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  input: {
    color: 'black',
    padding: 10,
    width: 250,
  },
});

export default Login;
