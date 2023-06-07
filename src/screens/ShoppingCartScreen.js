import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React from "react";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";

const ShoppingCartTotals = () => (
  <View style={styles.totalsContainer}>
    <View style={styles.rows}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>410,00 $</Text>
    </View>
    <View style={styles.rows}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>10,00 $</Text>
    </View>
    <View style={styles.rows}>
      <Text style={styles.textBold}>Total</Text>
      <Text style={styles.textBold}>420,00 $</Text>
    </View>
  </View>
);

const ShoppingCartScreen = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable style={[styles.button, { width: width - 40 }]}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  rows: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    color: "gray",
    fontSize: 16,
  },
  textBold: {
    fontWeight: "500",
    fontSize: 16,
  },
  button: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "black",
    alignSelf: "center",
    padding: 20,
    alignItems: "center",
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});
