import CButton from "@/components/ui/c-button";
import CText from "@/components/ui/c-text";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import { Colors } from "@/constants/Colors";
import StepHeader from "@/features/auth/components/step-header";
import { router } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, StyleSheet, TextInput, View } from "react-native";

export default function Register() {
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNext = async () => {
    router.push("/(auth)/profile-setup");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/photos/auth-bg.png")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <Container style={styles.container}>
        <StepHeader />
        <View style={styles.formWrapper}>
          <Heading style={styles.heading}>Tell us a bit about you</Heading>
          <View style={{ marginTop: 20 }}>
            <View style={{ gap: 5, marginBottom: 20 }}>
              <CText style={{ fontSize: 14 }}>Name</CText>
              <TextInput
                placeholder="Enter your name"
                style={{
                  borderWidth: 1,
                  borderColor: Colors.border,
                  padding: 10,
                  borderRadius: 8,
                }}
                autoCapitalize="none"
                value={name}
                onChangeText={setName}
              />
            </View>

            <View style={{ gap: 5, marginBottom: 20 }}>
              <CText style={{ fontSize: 14 }}>Date of birth</CText>
              <TextInput
                placeholder="DD/MM/YYYY"
                style={{
                  borderWidth: 1,
                  borderColor: Colors.border,
                  padding: 10,
                  borderRadius: 8,
                }}
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
              />
            </View>

            <View style={{ gap: 5, marginBottom: 20 }}>
              <CText style={{ fontSize: 14 }}>Email</CText>
              <TextInput
                placeholder="Enter your email"
                style={{
                  borderWidth: 1,
                  borderColor: Colors.border,
                  padding: 10,
                  borderRadius: 8,
                }}
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
              />
            </View>
            <View style={{ gap: 5, marginBottom: 20 }}>
              <CText style={{ fontSize: 14 }}>Password</CText>
              <TextInput
                placeholder="Enter your password"
                secureTextEntry
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
          </View>
          <View style={styles.buttonWrapper}>
            <CButton onPress={handleNext}>Next</CButton>
          </View>
        </View>
      </Container>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  formWrapper: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  heading: {
    color: Colors.primary,
    textTransform: "capitalize",
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
