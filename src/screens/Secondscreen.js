import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const SecondScreen = ({route, navigation}) => {
  const {name} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>Name: {name}</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('ThirdScreen', {name: name})}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
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
  nameText: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
  },
});

export default SecondScreen;
