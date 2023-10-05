import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import BottomSheet, {
  BottomSheetSectionList,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';

const SectionComp = () => {
  const BottomSheetRef = useRef(null);

  const sections = useMemo(
    () =>
      Array(10) //10 sections containing 10 each section 10 items
        .fill(0)
        .map((_, index) => ({
          title: `Section ${index}`,
          data: Array(10)
            .fill(0)
            .map((_, Subindex) => `Item ${Subindex}`),
        })),
    [],
  );
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []); //changing sheet while pressing on the different buttons
  const handleSnapPress = useCallback(index => {
    BottomSheetRef.current?.snapToIndex(index);
  }, []);
  //presing on diffreent snaps buttons containing diffferent bottom sheet size
  const handleClosePress = useCallback(() => {
    BottomSheetRef.current.close();
  }, []);

  const renderSectionHeader = useCallback(
    ({section}) => (
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.title}>{section.title}</Text>
      </View>
    ),
    [],
    //rendering values of each sections
  );
  const renderItem = useCallback(
    ({item}) => (
      <View style={styles.itemContainer}>
        <Text style={styles.items}>{item}</Text>
      </View>
    ),
    [],
    //rendering items in each sections
  );
  return (
    <View style={styles.Container}>
      <Button title="Snap to 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Snap to 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap to 100%" onPress={() => handleSnapPress(2)} />
      <BottomSheet
        ref={BottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}>
        <View style={styles.button}>
          <Button title="close" onPress={handleClosePress} color="darkgreen" />
        </View>
        <BottomSheetSectionList
          sections={sections}
          keyExtractor={i => i}
          renderSectionHeader={renderSectionHeader}
          keyboardBehavior="fillParent"
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />
        <BottomSheetTextInput style={styles.input} />
        <View style={styles.secondcontentcontainer}>
          <Text style={styles.textsty}>Enter name</Text>
        </View>
      </BottomSheet>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'lightgreen',
    flex: 1,
    padding: 5,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  sectionHeaderContainer: {
    backgroundColor: 'white',
    padding: 6,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
  title: {
    color: 'blue',
    fontSize: 25,
    fontWeight: '900',
  },
  items: {
    color: 'darkgreen',
    fontSize: 16,
  },
  secondcontentcontainer: {
    //flex: 1,
    alignItems: 'center',
  },
  textsty: {
    fontSize: 22,
    color: '#000',
  },
  input: {
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    backgroundColor: 'rgba(151, 151, 151, 0.25)',
    borderColor: 'black',
    borderWidth: 1,
    color: '#000',
  },
  button: {
    padding: 5,
    height: 75,
    width: 250,
    alignSelf: 'center',
  },
});
export default SectionComp;
