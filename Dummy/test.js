import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Userdata = () => {
  const [users, setUsers] = useState([]); //take two usestate to get all datas

  useEffect(() => {
    // Fetch data from the server using Axios
    axios
      .get('https://dummyjson.com/users') // API to get data from the backend
      .then(response => {
        console.log('Users12:', response?.data?.users);
        setUsers(response.data.users); // Set the posts data
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });

    // Fetch tags data here if needed, similar to how posts are fetched
  }, []);
  // console.log(`123456:: `, users);
  const renderItem = ({item}) => {
    return (
      // always insert data inside return then only it will be visible in the screen
      <>
        <View style={styles.postContainer}>
          <Text style={styles.text}> 0 object</Text>
          <Text style={{color: 'green'}}>
            ID: {item.id} {'\n'}{' '}
          </Text>
          <Text style={{color: 'green'}}>
            Firstname: {item.firstName}
            {'\n'}{' '}
          </Text>
          <Text style={{color: 'green'}}>
            Lastname: {item.lastName}
            {'\n'}{' '}
          </Text>
          <Text style={{color: 'green'}}>
            Maiden Name: {item.maidenName}
            {'\n'}{' '}
          </Text>
          <Text style={{color: 'green'}}>
            Age: {item.age}
            {'\n'}{' '}
          </Text>
          <Text style={{color: 'green'}}>
            Gender: {item.gender}
            {'\n'}{' '}
          </Text>
          <Text style={{color: 'green'}}>
            Email: {item.email}
            {'\n'}{' '}
          </Text>
          <Text style={{color: 'green'}}>
            Phone: {item.phone}
            {'\n'}{' '}
          </Text>
          <Text style={{color: 'green'}}>
            UserName: {item.username}
            {'\n'}{' '}
          </Text>
          <Text style={{color: 'green'}}>
            Password: {item.password}
            {'\n'}{' '}
          </Text>
          <Text style={{color: 'green'}}>
            Birth Date: {item.birthDate}
            {'\n'}{' '}
          </Text>
          <Text style={{color: 'green'}}>
            image: {item.image}
            {'\n'}{' '}
          </Text>
          <Text style={{color: 'green'}}>
            BloodGroup: {item.bloodGroup}
            {'\n'}{' '}
          </Text>
          <Text style={{color: 'green'}}>
            Height: {item.height}
            {'\n'}{' '}
          </Text>
          <Text style={{color: 'green'}}>
            Weight: {item.weight}
            {'\n'}{' '}
          </Text>
          <Text style={{color: 'green'}}>
            Eyecolor: {item.eyeColor}
            {'\n'}{' '}
          </Text>
          <Text style={styles.text}>Hair properties</Text>
          <Text style={{color: 'royalblue'}}>
            Domain: {item.hair.domain} {'\n'}{' '}
          </Text>
          <Text style={{color: 'royalblue'}}>
            IP: {item.hair.ip} {'\n'}{' '}
          </Text>
          <Text style={styles.text}>Address properties</Text>
          <Text style={{color: 'pink'}}>
            Address: {item.address.address} {'\n'}{' '}
          </Text>
          <Text style={{color: 'pink'}}>
            city: {item.address.city} {'\n'}{' '}
          </Text>
          <Text style={styles.text}>Address+Coordinates</Text>
          <Text style={{color: 'purple'}}>
            city: {item.address.city} {'\n'}{' '}
          </Text>
          <Text style={{color: 'purple'}}>
            lat: {item.address.coordinates.lat} {'\n'}{' '}
          </Text>
          <Text style={{color: 'purple'}}>
            lng: {item.address.coordinates.lng} {'\n'}{' '}
          </Text>
          <Text style={{color: 'purple'}}>
            postalcode: {item.address.postalCode} {'\n'}{' '}
          </Text>
          <Text style={{color: 'purple'}}>
            State: {item.address.state} {'\n'}{' '}
          </Text>
        </View>
      </>
    );
  };

  return (
    <View>
      <FlatList
        styles={styles.container}
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    color: 'black',
  },
  postContainer: {
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 16,
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default Userdata;
