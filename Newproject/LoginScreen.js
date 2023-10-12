import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: '#fff'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 5,
          }}>
          <Image source={require('./assets/LOGIN.png')} style={styles.img} />
        </View>
        <View style={{paddingTop: 5}}>
          <Text
            style={{
              color: '#0b1e52',
              fontSize: 35,
              fontWeight: '400',
              textAlign: 'center',
            }}>
            Welcome Back!
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <View style={styles.inputContainer}>
            <Text style={{color: '#a5a5a5', fontSize: 18}}>Email</Text>
            <View style={{marginTop: 25}}>
              <TextInput style={styles.input} />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Icon
              name="eye-outline"
              color="#0b1e52"
              size={22}
              style={{left: 280}}
            />
            <Text
              style={{
                color: '#000',
                fontSize: 18,
                right: 18,
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: {width: -1, height: 1},
              }}>
              Password
            </Text>
            <TextInput style={styles.input} secureTextEntry={true} />
          </View>
          <View
            style={{
              right: 20,
              paddingTop: 5,
              paddingHorizontal: 10,
              left: 180,
            }}>
            <Text style={{fontSize: 16, color: '#0c6acf'}}>
              Forgot Password?
            </Text>
          </View>
        </View>
        <View style={{paddingTop: 20}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Dashboard')}
            style={styles.button}>
            <Text style={styles.buttext}>Log in</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingTop: 15,
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{color: '#0b1e52', fontSize: 18}}>
            Dont have account?
          </Text>
          <Text style={{color: '#0274e2', fontSize: 18}}>Create now</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    borderBottomWidth: 1, // Set the border width here
    borderBottomColor: '#0b1e52', // Set the border color here
  },
  icon: {
    height: 25,
    width: 25,
    color: 'gray',
    marginTop: 15,
    position: 'absolute',
  },
  input: {
    color: '#0b1e52',
    padding: 10, // Adjust padding as needed
    flex: 1,
    fontSize: 18,
    marginTop: 0,
  },
  button: {
    backgroundColor: '#0274ed',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttext: {
    fontSize: 20,
    fontWeight: '400',
    alignSelf: 'center',
    textAlign: 'center',
    color: '#fff',
  },
  styling: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: 1,
    width: 35,
    backgroundColor: '#a5a5a5',
  },
  smalltext: {
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: 5,
  },
  socialmedia: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnSecondary: {
    height: 50,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
  },
  fb: {
    height: 22,
    width: 22,
  },
  text: {
    color: '#000',
    fontWeight: '600',
    fontSize: 15,
  },
  space: {
    width: 10,
  },
  gg: {
    height: 20,
    width: 20,
  },
  laststy: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  img: {
    alignItems: 'center',
    height: 290,
    width: '90%',
    marginTop: 5,
  },
});

export default LoginScreen;
