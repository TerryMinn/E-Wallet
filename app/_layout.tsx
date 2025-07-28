import { useColorScheme } from "@/hooks/useColorScheme";
import { authClient } from "@/lib/auth-client";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  const session = authClient.useSession();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    PoppinLight: require("../assets/fonts/Poppins-Light.ttf"),
    PoppinRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded || session.isPending) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={session.data === null}>
          <Stack.Screen name="(auth)" />
        </Stack.Protected>
        <Stack.Protected guard={session.data !== null}>
          <Stack.Screen name="(home)" />
        </Stack.Protected>
      </Stack>
      <StatusBar style="auto" />
      <Toast topOffset={60} />
    </ThemeProvider>
  );
}
