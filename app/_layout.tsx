import { Stack } from "expo-router";
import Header from "./header";

export default function RootLayout() {
  return <Stack>
  <Stack.Screen name="index" options={{ header: () => <Header /> }} />
  <Stack.Screen name="features" options={{ header: () => <Header /> }} />
  <Stack.Screen name="about" options={{ title: "About Us" }} />
  <Stack.Screen name="pricing" options={{ title: "Pricing" }} />
  </Stack>
}
