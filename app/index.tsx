import { Text, ScrollView, View,  StyleSheet } from "react-native";
import HeroSection from "./HeroBackground";
import FeaturesSection from "./featureSection";
import Dashboard from "./Dashboard";

export default function Index() {
  return (
    <ScrollView  contentContainerStyle={styles.container}
    >
      <Dashboard></Dashboard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(15, 23, 42, 0.9)",
  },
});
