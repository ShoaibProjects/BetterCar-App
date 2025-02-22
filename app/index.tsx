import { Text, ScrollView, View,  StyleSheet } from "react-native";
import HeroSection from "./HeroBackground";
import Features from "./features";
import Dashboard from "./Dashboard";
import AboutBetterCar from "./smallAbout";
import ContactForm from "./contact";

export default function Index() {
  return (
    <ScrollView  contentContainerStyle={styles.container}
    >
      <Dashboard></Dashboard>
      {/* <HeroSection></HeroSection>
      <Features></Features>
      <AboutBetterCar></AboutBetterCar>
      <ContactForm></ContactForm> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#162235",
  },
});
