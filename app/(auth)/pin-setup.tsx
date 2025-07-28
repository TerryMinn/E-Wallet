import CButton from "@/components/ui/c-button";
import CText from "@/components/ui/c-text";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import { Colors } from "@/constants/Colors";
import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";

export default function PinSetup() {
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
              onFilled={(text) => console.log(`OTP is ${text}`)}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CButton>Continue</CButton>
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
