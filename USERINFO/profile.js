import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, Button, StyleSheet} from 'react-native';

const Profile = ({navigation}) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Fetch user data from AsyncStorage &This part of the code sets up an event listener for the 'focus' event of the screen's navigation. The 'focus' event occurs when the screen is navigated to or becomes the active screen. It's a good place to fetch or update data that should be visible when the screen is active.
    navigation.addListener('focus', () => {
      AsyncStorage.getItem('user')
        .then(data => {
          if (data) {
            setUserData(JSON.parse(data));
          }
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    });
  }, [navigation]);

  const handleEditData = () => {
    navigation.navigate('EditProfile', {userData});
    // <EditProfileScreen userData={userData}/>
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'blue', backgroundColor: 'white', fontSize: 35}}>
        ProfileScreen
      </Text>
      <Text style={styles.textinput}>NAME: {userData.name}</Text>
      <Text style={styles.textinput}>Email: {userData.email}</Text>
      <Text style={styles.textinput}>Password: {userData.password}</Text>
      <Button title="Edit Data" onPress={handleEditData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    color: 'green',
    fontSize: 30,
    marginBottom: 20,
  },
});

export default Profile;
