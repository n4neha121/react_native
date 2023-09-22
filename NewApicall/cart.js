import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

export default function CartScreen() {
  const [cart, setCart] = useState([]); // Array to store cart items

  const addToCart = product => {
    // Check if the product is already in the cart
    const existingProduct = cart.find(
      item => item.productID === product.productID,
    );

    if (existingProduct) {
      // If the product is in the cart, increment its quantity
      existingProduct.quantity += 1;
      setCart([...cart]);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  const removeFromCart = product => {
    // Find the product in the cart
    const existingProductIndex = cart.findIndex(
      item => item.productID === product.productID,
    );

    if (existingProductIndex !== -1) {
      // If the product is found, decrement its quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity -= 1;

      // Remove the product from the cart if the quantity becomes zero
      if (updatedCart[existingProductIndex].quantity <= 0) {
        updatedCart.splice(existingProductIndex, 1);
      }

      setCart(updatedCart);
    }
  };

  return (
    <View>
      <Text>Cart Screen</Text>
      {cart.map(item => (
        <View key={item.productID}>
          <Text>{item.productName}</Text>
          <Text>Price: {item.price}</Text>
          <Text>Quantity: {item.quantity}</Text>
          <Button title="+" onPress={() => addToCart(item)} />
          <Button title="-" onPress={() => removeFromCart(item)} />
        </View>
      ))}
    </View>
  );
}
