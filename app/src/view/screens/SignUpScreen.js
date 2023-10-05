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
import COLORS from '../../consts/color';
const SignUpScreen = () => {
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
            FOX
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 22, color: COLORS.secondary}}>
            HUB
          </Text>
        </View>
        <View style={{marginTop: 70}}>
          <Text style={{color: COLORS.dark, fontSize: 27, fontWeight: 'bold'}}>
            Welcome Back,
          </Text>
          <Text
            style={{
              color: COLORS.light,
              fontSize: 19,
              fontWeight: 'bold',
            }}>
            Sign Up to Continue
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <View style={styles.inputContainer}>
            <Image source={require('./assets/user.png')} style={styles.icon} />
            <TextInput
              placeholder="Name"
              style={styles.input}
              placeholderTextColor="#a5a5a5"
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('./assets/mail.png')} style={styles.icon} />
            <TextInput
              placeholder="Email"
              style={styles.input}
              placeholderTextColor="#a5a5a5"
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Image source={require('./assets/pass.png')} style={styles.icon} />
          <TextInput
            placeholder="Password"
            style={styles.input}
            placeholderTextColor="#a5a5a5"
            secureTextEntry
          />
        </View>
        <View style={{paddingTop: 20}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttext}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.styling}>
          <View style={styles.line}></View>
          <Text style={styles.smalltext}>OR</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.socialmedia}>
          <View style={styles.btnSecondary}>
            <Text style={styles.text}>Sign in with</Text>
            <Image
              source={require('./assets/facebook.png')}
              style={styles.fb}
            />
          </View>
          <View style={styles.space} />
          <View style={styles.btnSecondary}>
            <Text style={styles.text}>Sign in with</Text>
            <Image source={require('./assets/google.png')} style={styles.gg} />
          </View>
        </View>
        <View style={styles.laststy}>
          <Text style={{color: '#a5a5a5', fontWeight: 'bold'}}>
            Don't have an account?
          </Text>
          <TouchableOpacity>
            <Text style={{color: 'red', fontWeight: 'bold'}}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  icon: {
    height: 25,
    width: 25,
    color: 'gray',
    marginTop: 15,
    position: 'absolute',
  },
  input: {
    color: '#a5a5a5',
    paddingLeft: 30,
    borderBottomWidth: 1,
    flex: 1,
    borderColor: '#a5a5a5',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#1f0991',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttext: {
    fontSize: 22,
    fontWeight: '600',
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
});
export default SignUpScreen;
