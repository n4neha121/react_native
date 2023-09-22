import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const Signup = ({navigation}) => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState(''); //take use state for user input
  const [email, setEmail] = useState('');

  const handleSignup = () => {
    // Validation: Check if fields are not empty
    if (!nickname || !password || !email) {
      Alert.alert('Please fill in all fields.');
      return;
    }

    // Validation: Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //this is a regexp for validation
    if (!emailRegex.test(email)) {
      Alert.alert('Please enter a valid email address.');
      return;
    }
    console.log({nickname: nickname, password: password, email: email});
    axios
      .post('https://empathy.yourcloudnetwork.net/api/auth', null, {
        params: {nickname: nickname, password: password, email: email},
      })
      .then(function (response) {
        console.log('RES: ', response);
        if (response.status >= 200 && response.status <= 299) {
          // Handle success, navigate to a new screen
          navigation.navigate('Login', {userData: response.data});
        } else {
          // Handle other success cases or errors based on your API response.
          console.error('Unexpected response status:', response.status);
          Alert.alert('Signup failed. Please try again.');
        }
      })
      .catch(function (error) {
        console.error('ERR: ', error);
        if (error?.response?.data?.message) {
          Alert.alert(error?.response?.data?.message); //This code snippet is using optional chaining (?.) and is checking if the error object has a response property, and if that response property has a data property, and if that data property has a message property. If all of these conditions are true (i.e., these properties exist and are not null or undefined), it means that there is an error message contained within the error object.
        } else {
          Alert.alert('Signup failed. Please try again.');
        }
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nickname"
          onChangeText={text => setNickname(text)}
          placeholderTextColor="blue"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          placeholderTextColor="blue"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          placeholderTextColor="blue"
        />
      </View>
      <Button title="Sign Up" onPress={handleSignup} color="blue" />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Go to Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // for background styling
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // for title styling of title
    color: 'black',
  },
  inputContainer: {
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 5, // for styling of text input field
    borderColor: 'black',
    borderWidth: 1,
  },
  input: {
    color: 'black',
    padding: 10,
    width: 250, // for input field text
  },
  buttonContainer: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Signup;
