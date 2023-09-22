import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import axios from 'axios';
import ModalComponent from './Modal'; // Create a separate Modal component

const PostsData = () => {
  const [posts, setPosts] = useState([]); //usestate to store values in array form so an empty array to display each usesrs data
  //const [tags, setTags] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({
    id: '',
    title: '',
    body: '',
    userId: '',
    tags: [],
  });
  useEffect(() => {
    // Fetch data from the server using Axios
    axios
      .get('https://dummyjson.com/posts')
      .then(response => {
        console.log('Posts:', response);
        setPosts(response.data.posts);
      }) //in this we fetched data from an api where we will display the posts data in a response if the api call will,be successful
      .catch(error => {
        console.error('Error fetching posts:', error); //else if an error will be caught then it will show error
      });

    // Fetch tags data here if needed, similar to how posts are fetched
  }, []);

  const renderItem = ({item, index}) => {
    // in this render the each items in a post will be rendered
    const isPost = 'title' in item && 'body' in item; //if a title and a body will exist in a post

    return (
      <View style={isPost ? styles.postContainer : styles.tagContainer}>
        {isPost ? ( // if a post willl be present then after each post elements a gray border color will be visible
          <>
            <TouchableOpacity
              style={styles.buttonColor}
              onPress={() => {
                setData({
                  id: item.id,
                  body: item.body, // this is here to render each items details one by one
                  title: item.title,
                  userId: item.userId,
                  tags: item.tags,
                });
                setSelectedItemId(item.id);
                setModalVisible(true);
              }}>
              <Text style={styles.buttontext}>Show Data</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={{color: 'darkgreen'}}>
              Reactions: {item.reactions}
            </Text>
            {/* Display additional data for tags here */}
          </>
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />

      <ModalComponent
        isVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
        selectedItem={selectedItemId}
        data={data}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  postContainer: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 16,
  },
  tagContainer: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 16,
  },
  buttonColor: {
    backgroundColor: 'lightblue',
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 1,
    marginBottom: 5,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
    marginTop: 5,
  },
  buttontext: {
    color: '#000',
    fontSize: 25,
  },
});
export default PostsData;
/*
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostsData from './Modal/component';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="postdata"
          component={PostsData}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


*/
