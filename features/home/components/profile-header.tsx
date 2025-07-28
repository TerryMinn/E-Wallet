import CText from "@/components/ui/c-text";
import { Colors } from "@/constants/Colors";
import { authClient } from "@/lib/auth-client";
import { User } from "better-auth";
import { Power } from "lucide-react-native";
import React from "react";
import {
  Alert,
  BackHandler,
  Image,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

type ProfileHeaderProps = {
  user: User;
};

const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: user.image as string }} style={styles.image} />
        </View>

        <View style={styles.nameContainer}>
          <CText style={styles.welcomeText}>Welcome back,</CText>
          <CText style={styles.nameText}>{user.name}</CText>
        </View>
      </View>
      <Pressable
        onPress={() => {
          Alert.alert(
            "Logout",
            "Are you sure you want to log out and close the app?",
            [
              {
                text: "Cancel",
                style: "cancel",
              },
              {
                text: "Logout",
                onPress: async () => {
                  await authClient.signOut();
                  BackHandler.exitApp();
                },
              },
            ],
            { cancelable: false }
          );
        }}
      >
        <Power color={Colors.red} />
      </Pressable>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  imageContainer: {
    width: 55,
    height: 55,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 150,
  },
  nameContainer: {},
  welcomeText: {},
  nameText: {
    textTransform: "capitalize",
  },
});
