import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';

const ProductDropdown = () => {
  const [open, setOpen] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null); // Store the selected product
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(response => {
        console.log('Products:', response?.data?.products);
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={selectedProduct} // Use selectedProduct as the value
        items={products.map(product => ({
          label: product.title, // Use product titles as dropdown labels
          value: product, // Store the entire product object
        }))}
        placeholder="Categories"
        style={{maxHeight: 50}}
        setOpen={setOpen}
        setValue={setSelectedProduct}
        setItems={() => {}}
      />
      {selectedProduct && ( // Display product details if a product is selected
        <ScrollView>
          <View style={styles.productDetails}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={{uri: selectedProduct.thumbnail}}
                style={{
                  width: 100,
                  height: 100,
                  marginTop: 10,
                  marginRight: 5,
                }}
              />
              <View style={{paddingTop: 15}}>
                <Text style={styles.textcolor}>
                  Product Name: {selectedProduct.title}
                </Text>
                <Text style={styles.textcolor}>
                  Description: {selectedProduct.description}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textcolor}>Price:</Text>
                  <Text style={styles.bold}> {selectedProduct.price}</Text>
                </View>
                <Text style={styles.textcolor}>
                  Discount Percentage: {selectedProduct.discountPercentage}
                </Text>
                <Text style={styles.textcolor}>
                  Rating: {selectedProduct.rating}
                </Text>
                <Text style={styles.textcolor}>
                  Brand: {selectedProduct.brand}
                </Text>
                <Text style={styles.textcolor}>
                  Category: {selectedProduct.category}
                </Text>
                <Text style={styles.textcolor}>
                  Thumbnail: {selectedProduct.thumbnail}
                </Text>
                <Text style={styles.textcolor}>Images:</Text>
                <View style={{flexDirection: 'row'}}>
                  <ScrollView horizontal={true}>
                    {selectedProduct.images.map((image, index) => (
                      <Image
                        key={index}
                        source={{uri: image}}
                        style={{
                          width: 100,
                          height: 100,
                          marginTop: 10,
                          marginRight: 10,
                          borderColor: '#000',
                          borderWidth: 1,
                        }}
                      />
                    ))}
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 100,
    flex: 1,
  },
  textcolor: {
    color: '#000',
    fontSize: 16,
    marginBottom: 8,
  },
  productDetails: {
    borderBottomWidth: 2,
    borderColor: 'gray',
    paddingBottom: 16,
  },
  bold: {color: '#000', fontSize: 16, marginBottom: 8, fontWeight: 'bold'},
});

export default ProductDropdown;

/*import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const ProductDropdown = ({products}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={
          products
            ? products.map(item => ({
                Product_Id: item.id,
                Product_Name: item.title,
                Description: item.description,
                Price: item.price,
                DiscountPercentag: item.discountPercentage,
                Rating: item.rating,
                Brand: item.brand,
                Category: item.Category,
                Thumbnail: item.thumbnail,
              }))
            : []
        }
        placeholder="Categories"
        style={{maxHeight: 50}}
        setOpen={setOpen}
        setValue={setValue}
        setItems={() => {}}
      />
      {value && (
        <View style={styles.productDetails}>
          <Text style={styles.textcolor}>
            Product Id: {value.Product_Id} {'\n'}
          </Text>
          <Text style={styles.textcolor}>
            Product Name: {value.Product_Name} {'\n'}
          </Text>
          <Text style={styles.textcolor}>
            Description: {value.Description} {'\n'}
          </Text>
          <Text style={styles.textcolor}>
            Price: {value.Price} {'\n'}
          </Text>
          <Text style={styles.textcolor}>
            Discount: {value.DiscountPercentag} {'\n'}
          </Text>
          <Text style={styles.textcolor}>
            Rating: {value.Rating} {'\n'}
          </Text>
          <Text style={styles.textcolor}>
            Brand: {value.Brand} {'\n'}
          </Text>
          <Text style={styles.textcolor}>
            Category: {value.Category} {'\n'}
          </Text>
          <Text style={styles.textcolor}>
            Thumbnail: {value.Thumbnail} {'\n'}
          </Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 100,
  },
  textcolor: {
    color: '#000',
    fontSize: 16,
  },
  productDetails: {
    marginTop: 16,
  },
});

export default ProductDropdown;*/
