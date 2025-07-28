import {
  ArrowLeftRight,
  BanknoteArrowDown,
  CircleDollarSign,
  Eye,
  History,
  Power,
} from "lucide-react-native";
import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              resizeMode="contain"
              style={styles.avatar}
              source={require("../../assets/images/photps/girl.png")}
            />
          </View>
          <View>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.nameText}>Terry Minn</Text>
          </View>
        </View>
        <Power color={"red"} size={26} />
      </View>

      {/* Content */}
      <View style={styles.main}>
        <View>
          {/* Balance Card */}
          <View style={styles.balanceCardContainer}>
            <View style={styles.overlayContainer}>
              <Image
                source={require("../../assets/images/photos/balance_card.png")}
                resizeMode="contain"
                style={styles.overlayImage}
              />
            </View>

            <ImageBackground
              source={require("../../assets/images/money-card.png")}
              resizeMode="cover"
              style={styles.balanceCard}
              imageStyle={styles.balanceCardImage}
            >
              <View style={styles.balanceInfo}>
                <Text style={styles.balanceLabel}>Balance</Text>
                <View style={styles.balanceRow}>
                  <Text style={styles.balanceAmount}>$3000.00</Text>
                  <TouchableOpacity>
                    <Eye color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* Banner */}
          <View style={styles.bannerContainer}>
            <ImageBackground
              source={require("../../assets/images/banner.png")}
              resizeMode="contain"
              style={styles.banner}
              imageStyle={styles.bannerImage}
            />
          </View>
        </View>

        {/* Quick Menus */}
        <View>
          <Text style={styles.menuTitle}>Quick Menus</Text>
          <View style={styles.menuRow}>
            <View style={styles.menuButton}>
              <ArrowLeftRight color={"white"} />
              <Text style={styles.menuText}>Transfer</Text>
            </View>
            <View style={styles.menuButton}>
              <CircleDollarSign color={"white"} />
              <Text style={styles.menuText}>Withdraw</Text>
            </View>
            <View style={styles.menuButton}>
              <BanknoteArrowDown color={"white"} />
              <Text style={styles.menuText}>Deposit</Text>
            </View>
            <View style={styles.menuButton}>
              <History color={"white"} />
              <Text style={styles.menuText}>History</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileSection: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  avatarContainer: {
    width: 64,
    height: 64,
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  welcomeText: {
    color: "#707070",
    fontSize: 14,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "600",
  },
  main: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 64,
  },
  balanceCardContainer: {
    height: 208,
    borderRadius: 16,
    overflow: "hidden",
    position: "relative",
  },
  overlayContainer: {
    position: "absolute",
    right: 0,
    top: -80,
    width: 240,
    height: 240,
    zIndex: 1,
  },
  overlayImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 16,
  },
  balanceCard: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  balanceCardImage: {
    borderRadius: 16,
  },
  balanceInfo: {
    padding: 20,
  },
  balanceLabel: {
    fontSize: 18,
    color: "#3048FF",
    marginBottom: 6,
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  balanceAmount: {
    fontSize: 26,
    fontWeight: "bold",
  },
  bannerContainer: {
    height: 176,
    borderRadius: 16,
    overflow: "hidden",
    marginTop: 20,
  },
  banner: {
    width: "100%",
    height: "100%",
  },
  bannerImage: {
    borderRadius: 16,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
    marginBottom: 12,
  },
  menuRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuButton: {
    padding: 20,
    backgroundColor: "#3048FF",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    width: 70,
  },
  menuText: {
    color: "white",
    fontSize: 12,
    marginTop: 4,
  },
});
