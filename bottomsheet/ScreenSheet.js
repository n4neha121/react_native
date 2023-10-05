import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LoginSheet from './LoginSheet';
import Register from './Register';
const ScreenSheet = () => {
  const [showLoginSheet, setShowLoginSheet] = useState(false);
  const [showRegisterSheet, setShowRegisterSheet] = useState(false);
  const LoginPress = () => {
    setShowLoginSheet(true);
    setShowRegisterSheet(false);
  };

  const RegisterPress = () => {
    setShowRegisterSheet(true);
    setShowLoginSheet(false);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/background.jpeg')}
        style={styles.img}
        resizeMode="cover">
        <Text style={styles.mainText}> FirstScreen</Text>
        <View style={styles.buttonContainerone}>
          <TouchableOpacity style={styles.firstbutton} onPress={LoginPress}>
            <Text style={styles.firstText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainertwo}>
          <TouchableOpacity style={styles.Secondbutton} onPress={RegisterPress}>
            <Text style={styles.secondText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {showLoginSheet && <LoginSheet />}
      {showRegisterSheet && <Register />}
    </View>
  );
};

export default ScreenSheet;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
  },
  buttonContainerone: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '145%',
    paddingBottom: 15,
  },
  buttonContainertwo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstbutton: {
    borderColor: '#fc7703',
    backgroundColor: '#fcca03',
    borderRadius: 25,
    borderWidth: 1,
    height: 53,
    width: '80%',
  },
  Secondbutton: {
    borderColor: 'blue',
    backgroundColor: '#036bfc',
    borderRadius: 25,
    borderWidth: 1,
    height: 53,
    width: '80%',
  },
  firstText: {
    fontSize: 22,
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    padding: 10,
    color: '#fff',
  },
  secondText: {
    fontSize: 22,
    textAlign: 'center',
    alignItems: 'center',
    padding: 10,
    color: '#fff',
  },
  mainText: {
    alignContent: 'center',
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
  },
});
//import React from 'react';
//import {GestureHandlerRootView} from 'react-native-gesture-handler';
//import ScreenSheet from './bottomsheet/ScreenSheet';
//function App() {
//return (
// <GestureHandlerRootView style={{flex: 1}}>
// <ScreenSheet />
//</GestureHandlerRootView>
//);
//}
//export default App;
