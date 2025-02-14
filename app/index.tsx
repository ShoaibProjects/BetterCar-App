import { Text, ScrollView, View,  StyleSheet } from "react-native";
import HeroSection from "./HeroBackground";

export default function Index() {
  return (
    <ScrollView  contentContainerStyle={styles.container}
    >
      <HeroSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
