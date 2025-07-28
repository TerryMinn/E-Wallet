import CButton from "@/components/ui/c-button";
import CText from "@/components/ui/c-text";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import { Colors } from "@/constants/Colors";
import { authClient } from "@/lib/auth-client";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import Toast from "react-native-toast-message";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      Toast.show({ type: "error", text1: error.code, text2: error.message });
      return;
    }

    router.push("/(home)");

    setLoading(false);
  };

  return (
    <ImageBackground
      source={require("../../assets/images/photos/auth-bg.png")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <Container>
        <View style={{ flex: 1 }}>
          <View style={styles.centered}>
            <Image source={require("../../assets/images/photos/qr.png")} />
          </View>

          <View style={{ flex: 1 }}>
            <Heading style={[styles.heading]}>SIGN IN YOUR ACCOUNT</Heading>

            <View style={styles.formContainer}>
              <View style={{ gap: 5, marginBottom: 20 }}>
                <CText style={{ fontSize: 14 }}>Email</CText>
                <TextInput
                  placeholder="Enter your email"
                  value={email}
                  onChangeText={setEmail}
                  style={{
                    borderWidth: 1,
                    borderColor: Colors.border,
                    padding: 10,
                    borderRadius: 8,
                  }}
                />
              </View>

              <View style={{ gap: 5, marginBottom: 20 }}>
                <CText style={{ fontSize: 14 }}>Password</CText>
                <TextInput
                  placeholder="Enter your password"
                  style={{
                    borderWidth: 1,
                    borderColor: Colors.border,
                    padding: 10,
                    borderRadius: 8,
                  }}
                  value={password}
                  onChangeText={setPassword}
                />
              </View>

              <CButton isLoading={loading} onPress={handleLogin}>
                Log in
              </CButton>
            </View>

            <View style={styles.bottomContainer}>
              <CText style={styles.footerText}>
                Don't have an account?{" "}
                <Link href={"/(auth)/register"} style={styles.link}>
                  Sign up
                </Link>
              </CText>
            </View>
          </View>
        </View>
      </Container>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  centered: {
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    marginTop: 20,
    color: Colors.primary,
  },
  formContainer: {
    marginTop: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 16,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  footerText: {
    textAlign: "center",
    fontSize: 14,
    color: "#A7A7A7",
    marginTop: 20,
  },
  link: {
    color: "#3048FF",
    textDecorationLine: "underline",
  },
});
