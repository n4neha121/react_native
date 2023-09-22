import React from 'react';
import {View, Text, Button} from 'react-native';

function MessagesScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BC8F8F',
      }}>
      <Text style={{color: '#000', fontSize: 35}}>Message Screen</Text>
      <Button
        title="Go to profile"
        onPress={() => navigation.navigate('profile')}
      />
    </View>
  );
}

export default MessagesScreen;
