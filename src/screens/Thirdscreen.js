import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const ThirdScreen = ({route, navigation}) => {
  const {name} = route.params;
  const [editedName, setEditedName] = useState(name);
  const [nameList, setNameList] = useState([]);

  const saveName = () => {
    setNameList([...nameList, editedName]);
    setEditedName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Your Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        onChangeText={setEditedName}
        value={editedName}
      />
      <Button title="Save" onPress={saveName} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <View style={styles.nameListContainer}>
        <Text style={styles.listTitle}>Edited Names:</Text>
        {nameList.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>
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
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    color: '#000',
  },
  nameListContainer: {
    marginTop: 20,
  },
  listTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: '#000',
  },
});

export default ThirdScreen;
