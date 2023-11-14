import React from 'react';
import {Text, View, StyleSheet, TextInput, Image} from 'react-native';
const Login = () => {
  <View style={styles.Container}>
    <Text style={styles.firsttext}>Login</Text>
    <Text style={styles.secondtext}>Username</Text>
    <View style={styles.inputContainer}>
      <Image source={require('./assets/gmail.png')} style={styles.icon} />
      <TextInput
        placeholder="Type yopur Email"
        style={styles.input}
        placeholderTextColor="#a5a5a5"
      />
    </View>
    <View style={styles.inputContainer}>
      <Image source={require('./assets/pass.png')} style={styles.icon} />
      <TextInput
        placeholder="Name"
        style={styles.input}
        placeholderTextColor="#a5a5a5"
      />
    </View>
    ;
  </View>;
};
export default Login;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  firsttext: {
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold',
  },
  secondtext: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
  },
  input: {
    color: '#a5a5a5',
    paddingLeft: 30,
    borderBottomWidth: 1,
    flex: 1,
    borderColor: '#a5a5a5',
    fontSize: 18,
  },
  icon: {
    height: 22,
    width: 22,
  },
});
