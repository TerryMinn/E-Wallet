import { expoClient } from "@better-auth/expo/client";
import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import * as SecureStore from "expo-secure-store";
import { auth } from "./auth";

export const authClient = createAuthClient({
  baseURL: "http://localhost:8081",
  plugins: [
    expoClient({
      scheme: "e-wallet",
      storagePrefix: "e-wallet",
      storage: SecureStore,
    }),
    inferAdditionalFields<typeof auth>(),
  ],
});
