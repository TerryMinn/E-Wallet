import CButton from "@/components/ui/c-button";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import { Colors } from "@/constants/Colors";
import StepHeader from "@/features/auth/components/step-header";
import useImageUploader from "@/hooks/useImageUploader";
import { router } from "expo-router";
import { Camera } from "lucide-react-native";
import React from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

export default function ProfilSetup() {
  const { showImageSourcePrompt, image } = useImageUploader();

  return (
    <ImageBackground
      source={require("../../assets/images/photos/auth-bg.png")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <Container style={styles.container}>
        <StepHeader step={2} />
        <View style={styles.formContainer}>
          <Heading style={{ color: Colors.primary }}>
            Upload Your Profile for a Better Experience
          </Heading>

          <Pressable onPress={showImageSourcePrompt}>
            <View style={styles.imageWrapper}>
              <Image
                style={styles.image}
                source={
                  image ? image : require("../../assets/images/photos/girl.png")
                }
              />
              <View style={styles.uploader}>
                <Camera color={Colors.white} size={50} />
              </View>
            </View>
          </Pressable>

          <CButton
            onPress={() => {
              router.push("/(auth)/pin-setup");
            }}
          >
            Next
          </CButton>
        </View>
      </Container>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 16,
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imageWrapper: {
    width: 300,
    height: 300,
    alignSelf: "center",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 150,
  },
  uploader: {
    position: "absolute",
  },
});
