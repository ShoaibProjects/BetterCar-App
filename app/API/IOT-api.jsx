import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default function IoTDataScreen() {
  const [data, setData] = useState({
    fuelLevel: 60, // Default value
    mileage: 1500, // Default value
  });

  const refreshData = () => {
    setData({
      fuelLevel: getRandomNumber(5, 100), // Random fuel percentage between 5% and 100%
      mileage: getRandomNumber(1000, 2000), // Random mileage between 1000 km and 2000 km
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>IoT Device Data</Text>

      <View style={styles.dataBox}>
        <Text style={styles.dataText}>Fuel Level: <Text style={styles.bold}>{data.fuelLevel}%</Text></Text>
        <Text style={styles.dataText}>Mileage: <Text style={styles.bold}>{data.mileage} km</Text></Text>
      </View>

      <Pressable onPress={refreshData}>
        <Text style={styles.refreshText}>Refresh Data</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  dataBox: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  dataText: {
    fontSize: 16,
    color: "black",
  },
  bold: {
    fontWeight: "bold",
  },
  refreshText: {
    fontSize: 18,
    color: "#3b82f6",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});