import { Colors } from "@/constants/Colors";
import React from "react";
import {
  ActivityIndicator,
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
  isLoading?: boolean;
};

const CButton = ({
  children,
  color = "white",
  onPress,
  style,
  isLoading,
}: CButtonProps) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      {isLoading && <ActivityIndicator />}
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
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  text: {
    color: "white",
    fontFamily: "PoppinRegular",
    fontSize: 14,
  },
});
