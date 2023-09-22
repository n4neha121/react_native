import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import axios from 'axios';

const SignupForm = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [EmailAddress, setEmailAddress] = useState('');
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (!firstName || !lastName || !EmailAddress || !userName || !password) {
      Alert.alert('Please fill in all input fields.');
      return;
    }

    // Simulate a POST request using Axios (replace with your actual API endpoint)
    axios
      .post('your-backend-api-url/signup', {
        firstName: firstName,
        lastName: lastName,
        EmailAddress: EmailAddress, // Use the correct field name expected by your server
        userName: userName,
        password: password,
      })
      .then(function (response) {
        if (response.status >= 200 && response.status <= 299) {
          // Handle success
          navigation.navigate('Signin');
        } else {
          // Handle other success cases or errors based on your API response.
          console.error('Unexpected response status:', response.status);
        }
      })
      .catch(function (error) {
        console.error(error);
        Alert.alert('Signup failed. Please try again.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={text => setFirstName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={text => setLastName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          onChangeText={text => setEmailAddress(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <Button title="Sign Up" onPress={handleSignup} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Background color of the entire screen
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black', // Text color
  },
  inputContainer: {
    backgroundColor: 'white', // Background color of the input container
    marginBottom: 10,
    borderRadius: 5,
    borderColor: 'black', // Border color
    borderWidth: 1,
    color: 'black',
  },
  input: {
    color: 'black', // Text color in the input field
    padding: 10,
    width: 250,
  },
});

export default SignupForm;
