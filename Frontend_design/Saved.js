import React from 'react';
import {View, Text, Button} from 'react-native';

function SavedScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BC8F8F',
      }}>
      <Text style={{color: '#000', fontSize: 35}}>Home Screen</Text>
      <Button
        title="Go to Message"
        onPress={() => navigation.navigate('Message')}
      />
    </View>
  );
}

export default SavedScreen;
