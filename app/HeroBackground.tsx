import { Video, ResizeMode } from "expo-av";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { useRouter } from "expo-router";
const { height } = Dimensions.get('window'); 

export default function HeroSection() {
  const router = useRouter();

  return (
          <View style={styles.container}>
        <Text style={styles.title}>Revolutionizing Fuel Management</Text>
        <Text style={styles.subtitle}>
          Save Fuel with Our New-age IoT Fuel Management System
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
          <Text style={styles.buttonText}>Start Saving Today</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative",
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
