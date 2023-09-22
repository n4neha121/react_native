import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';

const Userdata = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the server using Axios
    axios
      .get('https://dummyjson.com/users') // Replace with your API URL
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <FlatList
      data={users}
      renderItem={({item}) => {
        console.log(item.bank);
        const {cardExpire, cardNumber, cardType} = item.bank;
        const {address, city, coordinates, postalCode, state} = item.address; //each objects is been passed as with item object its so important to check that the data is in that field or not
        const {color, type} = item.hair;
        const {...extra} = item.company.address; //if same name of data will be present just only right the name of the fields and add it like this
        const {department, name, title} = item.company;
        const {ein, ssn, userAgent, domain, ip, macAddress, university} = item;
        // console.log(`7888:: `, adrs);
        return (
          <View style={styles.container}>
            <View style={styles.containerone}>
              <Text style={styles.textcolor}>address: {address}</Text>
              <Text style={styles.textcolor}>city: {city}</Text>
              <Text style={styles.textcolor}>lat:{coordinates.lat}</Text>
              <Text style={styles.textcolor}>lng{coordinates.lng}</Text>
              <Text style={styles.textcolor}>postalcode:{postalCode}</Text>
              <Text style={styles.textcolor}>State:{state}</Text>
            </View>
            <View style={styles.containertwo}>
              <Text style={styles.textcolor}>color:{color}</Text>
              <Text style={styles.textcolor}>type:{type}</Text>
            </View>
            <View style={styles.containerthree}>
              <Text style={styles.textcolor}>cardExpire:{cardExpire}</Text>
              <Text style={styles.textcolor}>cardnumber:{cardNumber}</Text>
              <Text style={styles.textcolor}>cardType:{cardType}</Text>
            </View>
            <View style={styles.containerfour}>
              <Text style={styles.textcolor}>Depart12:{extra.address}</Text>
              <Text style={styles.textcolor}>Name: {extra.city}</Text>
            </View>
            <View style={styles.containerfive}>
              <Text style={styles.textcolor}>depqrt:{department}</Text>
              <Text style={styles.textcolor}>name:{name}</Text>
              <Text style={styles.textcolor}>title:{title}</Text>
            </View>
            <View style={styles.containersix}>
              <Text style={styles.textcolor}>ein:{ein}</Text>
              <Text style={styles.textcolor}>ssn:{ssn}</Text>
              <Text style={styles.textcolor}>userAgent:{userAgent}</Text>
              <Text style={styles.textcolor}>domain:{domain}</Text>
              <Text style={styles.textcolor}>Ip:{ip}</Text>
              <Text style={styles.textcolor}>MacAddress:{macAddress}</Text>
              <Text style={styles.textcolor}>University:{university}</Text>
            </View>
            <View style={styles.containerthree}>
              <Text style={styles.textcolor}>cardExpire:{cardExpire}</Text>
              <Text style={styles.textcolor}>cardnumber:{cardNumber}</Text>
              <Text style={styles.textcolor}>cardType:{cardType}</Text>
            </View>
          </View>
        );
      }}
      keyExtractor={item => item.id.toString()}
    />
  );
};

/*

users: [{..}, {...}]

*/

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 16,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'green',
  },
  value: {
    fontSize: 16,
    color: 'blue',
  },
  textcolor: {
    color: '#000',
  },
  containertwo: {
    backgroundColor: 'lightgreen',
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 16,
  },
  containerone: {
    backgroundColor: 'red',
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 16,
  },
  containerthree: {
    backgroundColor: 'purple',
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 16,
  },
  containerfour: {
    backgroundColor: 'magenta',
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 16,
  },
  containerfive: {
    backgroundColor: 'yellow',
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 16,
  },
  containersix: {
    backgroundColor: 'orange',
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 16,
  },
});

export default Userdata;
