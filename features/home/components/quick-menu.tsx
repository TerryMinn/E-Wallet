import CText from "@/components/ui/c-text";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import {
  ArrowLeftRight,
  BanknoteArrowDown,
  CircleDollarSign,
  History,
} from "lucide-react-native";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

const QuickMenu = () => {
  const constant = [
    {
      icon: ArrowLeftRight,
      name: "Transfer",
      path: "/(process)/transfer",
    },
    {
      icon: CircleDollarSign,
      name: "WidthDraw",
      path: "/(process)/widthdraw",
    },
    {
      icon: BanknoteArrowDown,
      name: "Deposit",
      path: "/(process)/deposit",
    },
    {
      icon: History,
      name: "History",
      path: "/(process)/history",
    },
  ];
  return (
    <View style={styles.container}>
      <View>
        <CText>Quick Menus</CText>
        <FlatList
          data={constant}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => router.push({ pathname: item.path as any })}
            >
              <View style={styles.menuContainer}>
                <item.icon color={Colors.white} />
                <CText style={{ color: Colors.white, fontSize: 12 }}>
                  {item.name}
                </CText>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{
            justifyContent: "space-between",
            width: "100%",
            gap: 10,
            marginTop: 12,
          }}
        />
      </View>
    </View>
  );
};

export default QuickMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  menuContainer: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 80,
    width: 80,
  },
});
