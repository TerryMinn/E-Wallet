import { Colors } from "@/constants/Colors";
import { Tabs } from "expo-router";
import { CircleUser, House, QrCode } from "lucide-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";
export default function HomeRoot() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#3048FF",
        tabBarStyle: {
          paddingHorizontal: 50,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <House size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <View style={styles.center}>
              <View style={styles.innerBox}>
                <QrCode size={size} color={Colors.white} />
              </View>
            </View>
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ color, size }) => (
            <CircleUser color={color} size={size} />
          ),
          tabBarLabel: "Account",
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  center: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "white",
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  innerBox: {
    width: "75%",
    height: "75%",
    backgroundColor: "#3048FF",
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
  },
});
