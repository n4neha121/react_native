import React, {useCallback, useMemo, useRef} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import BottomSheet, {BottomSheetTextInput} from '@gorhom/bottom-sheet';

const LoginSheet = () => {
  const BottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['25%', '50%', '75%', '100%'], []);

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
          <Text style={styles.buttonText}>Snap to 25%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSnapPress(1)}>
          <Text style={styles.buttonText}>Snap to 50%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSnapPress(2)}>
          <Text style={styles.buttonText}>Snap to 75%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSnapPress(3)}>
          <Text style={styles.buttonText}>Snap to 100%</Text>
        </TouchableOpacity>
      </View>
      <BottomSheet
        ref={BottomSheetRef}
        index={-1} // Start with -1 to keep it closed initially
        snapPoints={snapPoints}
        keyboardBehavior="fillParent"
        onChange={handleSheetChange}>
        <View style={styles.bottomSheetContent}>
          <View style={styles.textcontent}>
            <Text style={styles.firstText}>Welcome Back</Text>
            <Text style={styles.secondText}>Login to your Account</Text>
          </View>
          <BottomSheetTextInput
            placeholder={'Mobile'}
            placeholderTextColor="gray"
            style={styles.input}
          />
          <BottomSheetTextInput
            placeholder={'Password'}
            placeholderTextColor="gray"
            style={styles.input}
          />
          <TouchableOpacity style={styles.loginButton} onPress={CloseSheet}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.text}>Forgot your Password?</Text>
          <Text style={styles.lastText}>Don't have an account? Sign in</Text>
          <TouchableOpacity style={styles.closeButton} onPress={CloseSheet}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
};

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
  text: {
    color: '#000',
    fontSize: 18,
    alignItems: 'center',
    textAlign: 'center',
  },
  textcontent: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#03fc5e',
    height: 45,
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
  bottomSheetContent: {
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  firstText: {
    color: '#000',
    fontSize: 25,
  },
  secondText: {
    color: '#adb1b8',
    fontSize: 25,
  },
  input: {
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 25,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    backgroundColor: 'rgba(151, 151, 151, 0.25)',
    borderColor: 'rgba(151, 151, 151, 0.25)',
    borderWidth: 1,
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#fcca03',
    borderRadius: 25,
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 22,
  },
  lastText: {
    color: '#fcba03',
    fontSize: 22,
  },
  closeButton: {
    backgroundColor: '#03ecfc',
    borderRadius: 25,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 22,
  },
});

export default LoginSheet;
