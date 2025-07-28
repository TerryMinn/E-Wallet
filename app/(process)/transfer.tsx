import { Colors } from "@/constants/Colors";
import { router, Stack } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { Pressable, SafeAreaView, StyleSheet, View } from "react-native";

const Transfer = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bg }}>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <Pressable
              onPress={() => {
                router.back();
              }}
            >
              <ChevronLeft />
            </Pressable>
          ),
          title: "Transfer",
        }}
      />
      <View></View>
    </SafeAreaView>
  );
};

export default Transfer;

const styles = StyleSheet.create({});
