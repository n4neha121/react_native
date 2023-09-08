/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button} from 'react-native';

function SettingsScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFC0CB',
      }}>
      <Text style={{color: '#000', fontSize: 35}}>Settings Screen</Text>
      <Button
        title="Go to Customize"
        onPress={() => navigation.navigate('Customize')}
      />
    </View>
  );
}

export default SettingsScreen;
