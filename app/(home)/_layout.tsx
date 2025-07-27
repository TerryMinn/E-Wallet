import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function HomeRoot() {
  return <Stack screenOptions={{ headerShown: false }} />;
}

const styles = StyleSheet.create({});
