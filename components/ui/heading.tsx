import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

type HeadingProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

const Heading = ({ children, style }: HeadingProps) => {
  return <Text style={[styles.heading, style]}>{children}</Text>;
};

export default Heading;

const styles = StyleSheet.create({
  heading: { fontSize: 24, fontFamily: "PoppinBold" },
});
