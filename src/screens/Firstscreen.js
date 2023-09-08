import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const FirstScreen = ({navigation}) => {
  const [name, setName] = useState('');

  const Continue = () => {
    navigation.navigate('SecondScreen', {name});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        onChangeText={setName}
        value={name}
      />
      <Button title="Submit" onPress={Continue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    color: '#000',
    width: '80%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});

export default FirstScreen;
