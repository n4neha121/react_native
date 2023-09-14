import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import axios from 'axios';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    userName: '',
    password: '', //all the input fields are declared here with blank input fields
  });

  const [responseMessage, setResponseMessage] = useState(''); //response message what if everything will be okk the response will be okk otherwise it will show error

  const Submit = () => {
    // Validation: Check if all fields are filled
    for (const key in formData) {
      if (formData[key] === '') {
        Alert.alert('Validation Error', 'Please fill in all fields');
        return; //all the key data is asked here if any space will be present then alert will be shown
      }
    }

    // Make an Axios POST request to your API
    axios
      .post('http://localhost:3300/user/signUp', formData)
      .then(response => {
        // Handle successful API response
        const responseData = response.data;
        setResponseMessage(`Signup successful. Response: ${responseData}`);
      })
      .catch(error => {
        // Handle error
        const errorMessage = error.message || 'Signup failed';
        Alert.alert('Error', errorMessage);
        console.error(errorMessage, error);
        setResponseMessage('');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 45, fontStyle: 'italic'}}>
        Sign Up
      </Text>
      <View style={styles.form}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setFormData({...formData, firstName: text})}
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setFormData({...formData, lastName: text})}
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setFormData({...formData, emailAddress: text})}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setFormData({...formData, userName: text})}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setFormData({...formData, password: text})}
          secureTextEntry
        />

        <Button title="Sign Up" onPress={Submit} />
        <Text style={styles.responseMessage}>{responseMessage}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
    justifyContent: 'center',
    padding: 16,
  },
  form: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  label: {
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 8,
    marginBottom: 16,
    color: '#000',
    zIndex: 9,
  },
  responseMessage: {
    color: 'green',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default SignupForm;
