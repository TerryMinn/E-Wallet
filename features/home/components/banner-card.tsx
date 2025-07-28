import React from "react";
import { Image, StyleSheet, View } from "react-native";

const BannerCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={require("../../../assets/images/photos/banner.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

export default BannerCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});
