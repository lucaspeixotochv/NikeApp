import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React from "react";
import CartListItem from "../components/CartListItem";
import { useSelector } from "react-redux";
import {
  selectSubtotal,
  selectDeliveryPrice,
  selectTotal,
} from "../store/cartSlice";
import EmptyCardItems from "../components/EmptyCardItems";

const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubtotal);
  const deliveryPrice = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);

  return (
    <View style={styles.totalsContainer}>
      <View style={styles.rows}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{Number(subtotal).toFixed(2)} US$</Text>
      </View>
      <View style={styles.rows}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>
          {deliveryPrice > 0 ? `${deliveryPrice.toFixed(2)} US$` : "For Free"}
        </Text>
      </View>
      <View style={styles.rows}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{Number(total).toFixed(2)} US$</Text>
      </View>
    </View>
  );
};

const ShoppingCartScreen = () => {
  const { width } = useWindowDimensions();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => <CartListItem cartItem={item} />}
            ListFooterComponent={ShoppingCartTotals}
          />
          <Pressable style={[styles.button, { width: width - 40 }]}>
            <Text style={styles.buttonText}>Checkout</Text>
          </Pressable>
        </>
      ) : (
        <EmptyCardItems />
      )}
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
