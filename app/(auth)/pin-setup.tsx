import CButton from "@/components/ui/c-button";
import CText from "@/components/ui/c-text";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import { Colors } from "@/constants/Colors";
import { authClient } from "@/lib/auth-client";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";

export default function PinSetup() {
  const [loading, setLoading] = useState(false);
  const params = useLocalSearchParams();

  const handleSignUp = async (pin: string) => {
    setLoading(true);
    const { email, password, name, image } = params;
    if (!email || !password || !name || !image) {
      return;
    }

    const { data, error } = await authClient.signUp.email({
      email: email as string,
      password: password as string,
      name: name as string,
      image: image as string,
      pin: pin as string,
    });
  };

  return (
    <ImageBackground
      source={require("../../assets/images/photos/auth-bg.png")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <Container style={{ paddingHorizontal: 50 }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={require("../../assets/images/photos/wallet-lock.png")}
          />

          <View style={styles.textContainer}>
            <Heading style={{ color: Colors.primary }}>SET YOUR PIN</Heading>
            <CText style={styles.mutedText}>
              Create a 6-digit PIN to secure your account and authorize
              transactions.
            </CText>
          </View>

          <View style={styles.otpContainer}>
            <OtpInput
              numberOfDigits={6}
              focusColor={Colors.primary}
              autoFocus={false}
              hideStick={true}
              placeholder="******"
              blurOnFilled={true}
              disabled={false}
              type="numeric"
              secureTextEntry={false}
              focusStickBlinkingDuration={500}
              onTextChange={(text) => console.log(text)}
              onFilled={handleSignUp}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CButton
            onPress={() => {
              router.push("/(home)");
            }}
          >
            Continue
          </CButton>
        </View>
      </Container>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  centered: {
    alignItems: "center",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 50,
    gap: 10,
  },
  mutedText: {
    color: Colors.mute,
    textAlign: "center",
    fontSize: 12,
  },
  otpContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 20,
  },
});
