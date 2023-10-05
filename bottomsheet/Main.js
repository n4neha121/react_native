import {View, Text, StyleSheet, Button} from 'react-native';
import {useCallback, useRef, useMemo} from 'react';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

const Main = () => {
  const BottomSheetRef = useRef(null);
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );
  const snapPoints = useMemo(() => ['25%', '50%', '75%', '100%'], []);

  //Callbacks
  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []);
  const handleSnapPress = useCallback(index => {
    BottomSheetRef.current?.snapToIndex(index);
  }, []);
  const renderItem = useCallback(
    item => (
      <View key={item} style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    [],
  );
  //button for closing bottomsheet
  const CloseSheet = () => BottomSheetRef.current.close();
  return (
    <View style={styles.Container}>
      <Button title="Snap to 75%" onPress={() => handleSnapPress(2)} />
      <Button title="Snap to 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap to 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Snap to 100%" onPress={() => handleSnapPress(3)} />

      <BottomSheet
        style={styles.bottom}
        ref={BottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}>
        <View style={styles.contentContainer}>
          <Text style={styles.text}> This is bottomsheet page content</Text>
          <Button title="Close Sheet" onPress={CloseSheet} />
        </View>
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          {data.map(renderItem)}
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'lightblue',
    flex: 1,
    padding: 5,
  },
  contentContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: 'ligntgreen',
    height: 75,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    backgroundColor: '#fcba03',
    padding: 8,
    margin: 8,
  },
  bottom: {
    backgroundColor: '#03f4fc',
  },
});

export default Main;
// .map(_, index => `Item ${index}`),
