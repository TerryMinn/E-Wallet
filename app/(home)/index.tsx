import { Colors } from "@/constants/Colors";
import BannerCard from "@/features/home/components/banner-card";
import MonetCard from "@/features/home/components/money-card";
import ProfileHeader from "@/features/home/components/profile-header";
import QuickMenu from "@/features/home/components/quick-menu";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const session = authClient.useSession();
  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader user={session.data?.user!} />
      <MonetCard userId={session.data?.session.userId!} />
      <BannerCard />
      <QuickMenu />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, flex: 1, backgroundColor: Colors.bg },
});
