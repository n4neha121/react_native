import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
const Postdata = () => {
  const [postData, setPostData] = useState({
    id: '',
    title: '',
    body: '',
    userId: '',
  });
  const [Tags, setTagsData] = useState({
    0: '',
    1: '',
    2: '',
  });

  const handleInputChange = (field, value) => {
    setPostData({...postData, [field]: value});
  };
  const TagsChange = (field, value) => {
    setTagsData({...Tags, [field]: value});
  };

  const postDataToAPI = () => {
    axios
      .post('https://dummyjson.com/posts', postData, Tags)
      .then(response => {
        console.log('Post request successful:', response.data);
        Alert.alert('Success', 'Data posted successfully');
      })
      .catch(error => {
        console.error('Error sending post request:', error);
        Alert.alert('Error', 'Failed to post data');
      });
  };

  return (
    <ScrollView>
      <ImageBackground
        source={require('./assets/back.jpeg')}
        resizeMode="cover"
        style={styles.img}>
        <View style={styles.container}>
          <Text style={styles.mainText}>Posts</Text>
          <View>
            <Text style={styles.text}>ID:</Text>
            <TextInput
              style={styles.textinput}
              value={postData.id}
              onChangeText={text => handleInputChange('id', text)}
            />

            <Text style={styles.text}>Title:</Text>
            <TextInput
              style={styles.textinput}
              value={postData.title}
              onChangeText={text => handleInputChange('title', text)}
            />

            <Text style={styles.text}>Body:</Text>
            <TextInput
              style={styles.textinput}
              value={postData.body}
              onChangeText={text => handleInputChange('body', text)}
            />

            <Text style={styles.text}>User ID:</Text>
            <TextInput
              style={styles.textinput}
              value={postData.userId}
              onChangeText={text => handleInputChange('userId', text)}
            />
            <Text style={styles.text}>0:</Text>
            <TextInput
              style={styles.textinput}
              value={Tags[0]}
              onchangeText={text => TagsChange('Tag1', text)}
            />
            <Text style={styles.text}>1:</Text>
            <TextInput
              style={styles.textinput}
              value={Tags[1]}
              onchangeText={text => TagsChange('Tag2', text)}
            />
            <Text style={styles.text}>2:</Text>
            <TextInput
              style={styles.textinput}
              value={Tags[2]}
              onchangeText={text => TagsChange('Tag3', text)}
            />
          </View>
          <TouchableOpacity onPress={postDataToAPI} style={styles.buttonstyle}>
            <Text style={styles.buttontext}>Post</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainText: {
    color: '#438ebf',
    fontSize: 30,
  },
  text: {
    color: '#000',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textinput: {
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 20,
    color: 'black',
    width: 250,
  },
  input: {
    fontSize: 20,
    color: 'black',
    width: 250,
  },
  buttonstyle: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 1,
    marginBottom: 8,
    width: 150,
  },
  buttontext: {
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Postdata;
