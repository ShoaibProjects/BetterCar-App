import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Pressable, Modal } from "react-native";
import IoTDataScreen from "./API/IOT-api";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <IoTDataScreen />

        <Text style={styles.connectionInfo}>
          ✅ Connect to ESP32 over TCP (IP: 192.168.1.100, Port: 8080)
        </Text>
        <Text style={styles.tcpTestingInfo}>
          For TCP testing, ensure the ESP32 is running a TCP server on the specified IP and port.
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.testButton,
            { backgroundColor: pressed ? '#2962ff' : '#3b82f6' },
          ]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.testButtonText}>Test TCP Connection</Text>
        </Pressable>

        {/* TCP Test Modal */}
        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>TCP Connection Test</Text>
              <Text style={styles.modalMessage}>
                ✅ Simulated: Connection successful! {"\n"}(Real implementation needed for actual testing)
              </Text>

              <Pressable onPress={() => setModalVisible(false)} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#162235",
    padding: 20,
  },
  connectionInfo: {
    fontSize: 16,
    color: "#60A5FA",
    textAlign: "center",
    marginTop: 20,
  },
  tcpTestingInfo: {
    fontSize: 14,
    color: "#ccc",
    textAlign: "center",
    marginTop: 10,
  },
  testButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  testButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    elevation: 10, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: "#3b82f6",
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});