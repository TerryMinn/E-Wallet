import { Colors } from "@/constants/Colors";
import { authClient } from "@/lib/auth-client";
import { Power } from "lucide-react-native";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={async () => {
          await authClient.signOut();
        }}
      >
        <Power color={Colors.red} />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
