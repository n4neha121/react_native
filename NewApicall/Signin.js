import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import axios from 'axios';

const SigninScreen = navigation => {
  const [EmailAddress, setEmailAddress] = useState('');
  const [userName, setUserName] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleSignIn = async () => {
    if (!EmailAddress || !userName) {
      setValidationError('Please fill in both email and username fields');
    } else {
      try {
        const response = await axios.post('http://localhost:3300/user/signIn', {
          EmailAddress,
          userName,
        });

        if (response.data.isValid) {
          setValidationError('');
          navigation.navigate('Profile', {userName});
        } else {
          setValidationError('Email and username do not match our records');
        }
      } catch (error) {
        console.error('API Error:', error);
        setValidationError('An error occurred during sign-in');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'blue', textAlign: 'center', fontSize: 45}}>
        Sign In
      </Text>
      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setEmailAddress(text)}
        value={EmailAddress}
        keyboardType="email-address"
        placeholderTextColor="Blue"
      />

      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUserName(text)}
        value={userName}
        placeholderTextColor="Blue"
      />

      {validationError ? (
        <Text style={styles.errorText}>{validationError}</Text>
      ) : null}

      <Button title="Sign In" onPress={handleSignIn} />
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
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
  },
});

export default SigninScreen;
