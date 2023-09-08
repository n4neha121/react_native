import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const ProfileScreen = ({route, navigation}) => {
  //   const {email} = route.params;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    console.log('ROUTE: ', route);
  });
  const AddName = () => {
    setUserDetails([...userDetails, {email, name}]);
    // setEmail('');
    // setName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Info</Text>
      <Text>User Email: {email}</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="black"
        value={name}
        onChangeText={setName}
      />
      <Button title="Add Name" onPress={AddName} />
      <View style={styles.buttonContainer}>
        <Button
          title="Previous Screen"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Next Screen"
          onPress={() => navigation.navigate('Logout')}
        />
      </View>
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
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default ProfileScreen;
