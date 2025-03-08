import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable, Modal, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter(); // Navigation

  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#162235" },
          headerTitleAlign: "center",
          headerTitle: () => null,
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <Text style={styles.headerText}>BetterCar</Text>
            </View>
          ),
          headerRight: () => (
            <Pressable style={styles.menuButton} onPress={() => setMenuVisible(true)}>
              <Ionicons name="menu" size={28} color="white" />
            </Pressable>
          ),
        }}
      />

      {/* MENU OVERLAY */}
      <Modal visible={menuVisible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
          <View style={styles.overlay}>
            <View style={styles.menuContainer}>
              <Pressable style={styles.menuItem} onPress={() => { setMenuVisible(false); router.push("/"); }}>
                <Text style={styles.menuText}>🏠 Home</Text>
              </Pressable>
              <Pressable style={styles.menuItem} onPress={() => { setMenuVisible(false); router.push("/pricing"); }}>
                <Text style={styles.menuText}>💰 Pricing</Text>
              </Pressable>
              <Pressable style={styles.menuItem} onPress={() => { setMenuVisible(false); router.push("/contact"); }}>
                <Text style={styles.menuText}>📞 Contact</Text>
              </Pressable>
              <Pressable style={styles.menuItem} onPress={() => { setMenuVisible(false); router.push("/features"); }}>
                <Text style={styles.menuText}>🚀 Features</Text>
              </Pressable>
              <Pressable style={styles.menuItem} onPress={() => { setMenuVisible(false); router.push("/smallAbout"); }}>
                <Text style={styles.menuText}>ℹ️ About</Text>
              </Pressable>
              <Pressable style={styles.menuItem} onPress={() => { setMenuVisible(false); alert("Settings Clicked"); }}>
                <Text style={styles.menuText}>⚙️ Settings</Text>
              </Pressable>
              <Pressable style={styles.menuItem} onPress={() => { setMenuVisible(false); alert("Logout Clicked"); }}>
                <Text style={styles.menuText}>🚪 Logout</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  menuButton: {
    marginRight: 15,
    padding: 10,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginTop: 50, // Moves menu below status bar
    marginRight: 20, // Aligns to top-right
  },
  menuContainer: {
    width: 180,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    alignItems: "flex-start",
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  menuItem: {
    paddingVertical: 10,
    width: "100%",
  },
  menuText: {
    fontSize: 16,
    fontWeight: "500",
  },
});