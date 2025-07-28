import CText from "@/components/ui/c-text";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

type StepHeaderProps = {
  step?: number;
};

export default function StepHeader({ step = 1 }: StepHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          router.replace("/(auth)");
        }}
      >
        <View style={styles.back}>
          <ChevronLeft size={14} color={Colors.white} />
          <CText style={styles.backText}>Back to login</CText>
        </View>
      </Pressable>

      <View>
        <CText style={styles.step}>{step}/2</CText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    color: Colors.white,
    fontSize: 12,
  },
  step: {
    fontSize: 12,
    color: Colors.white,
  },
});
