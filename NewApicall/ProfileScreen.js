import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Profile = ({route, navigation}) => {
  // Assuming you pass the username as a route parameter when navigating to this screen
  const {userName} = route.params;
  navigation.navigate('product');

  // Function to get the first letter of the username for the logo
  const getFirstLetter = name => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>{getFirstLetter(userName)}</Text>
        </View>
      </View>
      <Text style={styles.username}>{userName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: 120,
    height: 120,
    backgroundColor: 'lightgray',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: 'gray',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 40,
    color: 'white',
  },
  username: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Profile;
