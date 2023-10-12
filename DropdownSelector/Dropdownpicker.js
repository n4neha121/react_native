{/*import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ProductDropdownPicker = ({
  products,
  selectedProduct,
  onSelectProduct,
}) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity style={styles.dropdownHeader} onPress={toggleDropdown}>
        <Text style={styles.dropdownHeaderText}>
          {selectedProduct || 'Select a Product'}
        </Text>
      </TouchableOpacity>
      {isDropdownVisible && (
        <View style={styles.dropdownOptions}>
          {products.map((product, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownOption}
              onPress={() => {
                onSelectProduct(product);
                toggleDropdown();
              }}>
              <Text>{product}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    position: 'relative',
    width: '80%',
    margin: 10,
  },
  dropdownHeader: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  dropdownHeaderText: {
    fontSize: 16,
  },
  dropdownOptions: {
    position: 'absolute',
    top: '100%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dropdownOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ProductDropdownPicker;
*/}