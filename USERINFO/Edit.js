import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const EditProfileScreen = ({navigation, route}) => {
  const {userData} = route.params;
  const [editedData, setEditedData] = useState({
    name: userData.name,
    email: userData.email,
    password: userData.password,
  });

  useEffect(() => {
    console.log(route);
  });

  const handleUpdateData = async () => {
    if (editedData.email && editedData.password) {
      // Update user data in AsyncStorage
      const updatedData = {...userData, ...editedData};
      try {
        await AsyncStorage.setItem('user', JSON.stringify(updatedData));
        // setUserData(updatedData); // Update userData in the parent component
        navigation.goBack(); // Go back to the ProfileScreen after updating data
      } catch (error) {
        console.error('Error updating user data:', error);
      }
    } else {
      alert('Fill all fields or invalid data');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'blue', backgroundColor: 'white', fontSize: 35}}>
        EditProfileScreen
      </Text>
      <TextInput
        style={styles.input}
        placeholder="New Name"
        onChangeText={text => setEditedData({...editedData, name: text})}
        placeholderTextColor="blue"
        value={editedData.name}
      />
      <TextInput
        style={styles.input}
        placeholder="New Email"
        onChangeText={text => setEditedData({...editedData, email: text})}
        placeholderTextColor="blue"
        value={editedData.email}
      />
      <TextInput
        style={styles.input}
        placeholder="New Password"
        onChangeText={text => setEditedData({...editedData, password: text})}
        secureTextEntry={true}
        placeholderTextColor="blue"
        value={editedData.password}
      />
      <Button title="Update Data" onPress={handleUpdateData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '50%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    padding: 10,
    color: 'black',
  },
});

export default EditProfileScreen;
