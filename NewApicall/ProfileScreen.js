import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

const ProfileScreen = ({route}) => {
  const {userName} = route.params;
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint to fetch user data
    axios
      .get('http://localhost:3300/user/profile')
      .then(response => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('API Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username:</Text>
      <Text style={styles.username}>{userName}</Text>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <Text style={styles.label}>User Data:</Text>
          <Text>{JSON.stringify(userData, null, 2)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
    padding: 16,
  },
  label: {
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 4,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
  },
});

export default ProfileScreen;
