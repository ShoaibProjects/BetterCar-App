import { Video, ResizeMode } from "expo-av";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { useRouter } from "expo-router";

export default function HeroSection() {
  const router = useRouter();

  return (
          <View style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Revolutionizing Fuel Management</Text>
        <Text style={styles.subtitle}>
          Save Fuel with Our New-age IoT Fuel Management System
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
          <Text style={styles.buttonText}>Start Saving Today</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: '#0f172a',
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay for text visibility
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#76A9FA",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#ccc",
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    marginTop: 15,
    backgroundColor: "transparent",
    borderColor: "#76A9FA",
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#4f8ef7",
    fontSize: 16,
    fontWeight: "bold",
  },
});
