import { Colors } from "@/constants/Colors";
import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

type CButtonProps = {
  children?: React.ReactNode;
  onPress?: () => void;
  color?: string;
  style?: StyleProp<ViewStyle>;
};

const CButton = ({
  children,
  color = "white",
  onPress,
  style,
}: CButtonProps) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, { color: color }]}>{children}</Text>
    </Pressable>
  );
};

export default CButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    backgroundColor: Colors.primary,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontFamily: "PoppinRegular",
    fontSize: 14,
  },
});
