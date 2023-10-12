import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
const ProductDropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Fetch product data from the server using Axios
    axios
      .get('https://dummyjson.com/products') // Replace with your API URL
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
        value={value}
        items={products.map(item => ({
          label: item.title,
          value: item,
        }))}
        placeholder="Categories"
        style={{maxHeight: 50}}
        setOpen={setOpen}
        setValue={setValue}
        setItems={() => {}}
      />
      {value && (
        <View style={styles.productDetails}>
          <Text style={styles.textcolor}>
            Product Id: {value.id}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Product Name: {value.title}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Description: {value.description}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Price: {value.price}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Discount Percentage: {value.discountPercentage}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Rating: {value.rating}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Brand: {value.brand}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Category: {value.category}
            {'\n'}{' '}
          </Text>
          <Text style={styles.textcolor}>
            Thumbnail: {value.thumbnail}
            {'\n'}{' '}
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

export default ProductDropdown;

{
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
}
