import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';

const PostsData = () => {
  const [posts, setPosts] = useState([]); // take an empty array to show data inn

  useEffect(() => {
    // Fetch data from the server using Axios
    axios
      .get('https://dummyjson.com/posts') //api to get data from mbackend
      .then(response => {
        console.log('hgfdj', response);
        setPosts(response.data.posts); //make sure to add the name of array or table
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderPostItem = ({item}) => {
    return (
      // in this to add space we use \n
      // each item data accessing
      <View style={styles.postContainer}>
        <Text style={{color: 'blue'}}>
          ID: {item.id} {'\n'}{' '}
        </Text>
        <Text style={{color: 'purple'}}>
          Title: {item.title}
          {'\n'}{' '}
        </Text>
        {/* <Text> </Text> */}
        <Text style={{color: 'green'}}>
          Body: {item.body}
          {'\n'}{' '}
        </Text>
        {/* <Text> </Text */}
        <Text style={{color: 'lightgreen'}}>User ID: {item.userId} </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderPostItem}
        keyExtractor={item => item.id.toString()}
        keyExtra
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set the background color to white
    color: 'red',
  },
  postContainer: {
    borderBottomWidth: 1, // Add a border after each element
    borderColor: 'gray', // Border color
    padding: 16,
    color: '#000',
  },
});

export default PostsData;
