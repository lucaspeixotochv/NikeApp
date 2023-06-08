import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const EmptyCardItems = () => {
  return (
    <View style={styles.container}>
      <Feather name="shopping-cart" size={100} color="gray" />
      <Text style={styles.text}>Your shopping cart is empty </Text>
    </View>
  );
};

export default EmptyCardItems;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    flex: 1,
  },
  text: {
    fontSize: 24,
    marginVertical: 8,
    textAlign: "center",
  },
});
