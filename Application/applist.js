import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';

const PostsData = () => {
  const [posts, setPosts] = useState([]); //take two use effects one for accessing posts and one for accesssing tags
  const [tags, setTags] = useState([]);
  // Array for posts
  useEffect(() => {
    // Fetch data from the server using Axios
    axios
      .get('https://dummyjson.com/posts') // API to get data from the backend
      .then(response => {
        console.log('Posts:', response);
        setPosts(response.data.posts); // Set the posts data
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });

    // Fetch tags data here if needed, similar to how posts are fetched
  }, []);
  const combinedData = [...posts, ...tags.map(tag => ({reactions: tag}))];

  // Combine posts and tags into a single array ERROR  Error: Creating a navigator doesn't take an argument. Maybe you are trying to use React Navigation 4 API? See https://reactnavigation.org/docs/hello-react-navigation for the latest API and guides., js engine: hermes
  const renderItem = ({item}) => {
    // Check the type of item to render different styles for posts and tags
    const isPost = 'title' in item && 'body' in item;

    return (
      <View style={isPost ? styles.postContainer : styles.tagContainer}>
        {isPost ? (
          <>
            <Text style={{color: 'blue'}}>
              ID: {item.id} {'\n'}{' '}
            </Text>
            <Text style={{color: 'purple'}}>
              Title: {item.title}
              {'\n'}{' '}
            </Text>
            <Text style={{color: 'green'}}>
              Body: {item.body}
              {'\n'}{' '}
            </Text>
            <Text style={{color: 'green'}}>
              reactions: {item.reactions}
              {'\n'}{' '}
            </Text>
            <Text style={{color: 'magenta'}}>User ID: {item.userId}</Text>
            {item.tags.length > 0 && ( // it  is second array
              <View>
                <Text style={{color: 'magenta'}}>Tags:</Text>
                {item.tags.map((innerItem, index) => {
                  // To fetch the inner item of tags array
                  return (
                    <Text style={{color: 'magenta'}}>
                      {index + 1}.{innerItem}
                    </Text>
                  );
                })}
              </View>
            )}
          </>
        ) : (
          <>
            <Text style={{color: 'darkgreen'}}>
              Reactions: {item.reactions}
            </Text>
          </>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={combinedData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: 'red',
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
});
export default PostsData;
