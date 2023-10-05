import React, {useCallback, useMemo, useRef} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import BottomSheet, {BottomSheetTextInput} from '@gorhom/bottom-sheet';
const Register = () => {
  const BottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);

  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []);

  const handleSnapPress = useCallback(index => {
    BottomSheetRef.current?.snapToIndex(index);
  }, []);

  const CloseSheet = () => BottomSheetRef.current.close();

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSnapPress(0)}>
          <Text style={styles.buttext}>Snap to 25%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSnapPress(1)}>
          <Text style={styles.buttext}>Snap to 50%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSnapPress(2)}>
          <Text style={styles.buttext}>Snap to 100%</Text>
        </TouchableOpacity>
      </View>
      <BottomSheet
        ref={BottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        keyboardBehavior="fillParent"
        onChange={handleSheetChange}>
        <View>
          <Text style={styles.firsttext}>Welcome Back</Text>
          <Text style={styles.Secondtext}>Create a new account</Text>
        </View>
        <View>
          <BottomSheetTextInput
            placeholder={'Name'}
            placeholderTextColor="gray"
            //onChangeText={handleDocumentChange}
            style={styles.input}
          />
        </View>
        <View>
          <BottomSheetTextInput
            placeholder={'Mobile'}
            placeholderTextColor="gray"
            //onChangeText={handleDocumentChange}
            style={styles.input}
          />
        </View>
        <View>
          <BottomSheetTextInput
            placeholder={'Password'}
            placeholderTextColor="gray"
            //onChangeText={handleDocumentChange}
            style={styles.input}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.Secondbutton} onPress={CloseSheet}>
            <Text style={styles.buttontext}>Register</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.lasttext}>Already have an account Login</Text>
        </View>
      </BottomSheet>
    </View>
  );
};
export default Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 20,
  },
  input: {
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    backgroundColor: 'rgba(151, 151, 151, 0.25)',
    borderColor: 'rgba(151,151,151,0.25)',
    borderWidth: 1,
    color: '#fff',
  },
  firsttext: {
    color: '#000',
    fontSize: 25,
    padding: 5,
  },
  Secondtext: {
    color: '#adb1b8',
    fontSize: 25,
    padding: 5,
  },
  lasttext: {
    color: '#fcba03',
    fontSize: 20,
  },
  buttontext: {
    color: '#fff',
    fontsize: 25,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#03fc5e',
    height: 45,
    width: '35%',
  },
  buttonstog: {
    flexDirection: 'row',
  },
  buttext: {
    fontSize: 22,
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
    color: 'black',
  },
  Secondbutton: {
    backgroundColor: '#037ffc',
    borderRadius: 25,
    height: 45,
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
