import React from 'react';
import {View, Text} from 'react-native';

function Profile() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <Text style={{color: '#000', fontSize: 35}}>HomePage</Text>
    </View>
  );
}

export default Profile;