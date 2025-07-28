import { useColorScheme } from "@/hooks/useColorScheme";
import { authClient } from "@/lib/auth-client";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import Toast from "react-native-toast-message";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const session = authClient.useSession();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    PoppinLight: require("../assets/fonts/Poppins-Light.ttf"),
    PoppinRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded && !session.isPending) {
      SplashScreen.hideAsync();
    }
  }, [loaded, session.isPending]);

  if (!loaded || session.isPending) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false, animation: "fade" }}>
        <Stack.Protected guard={session.data === null}>
          <Stack.Screen name="(auth)" />
        </Stack.Protected>
        <Stack.Protected guard={session.data !== null}>
          <Stack.Screen name="(home)" />
        </Stack.Protected>
        <Stack.Protected guard={session.data !== null}>
          <Stack.Screen name="(process)" />
        </Stack.Protected>
      </Stack>
      <StatusBar style="auto" />
      <Toast topOffset={60} />
    </ThemeProvider>
  );
}
