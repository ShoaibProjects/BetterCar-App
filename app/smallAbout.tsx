import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const features = [
  "Cost Effective",
  "Precision and Accuracy Make it Excellent",
  "AI-powered theft detection algorithms",
  "Easy integration with Vehicle",
  "Mobile app for real-time monitoring on the go",
];

const AboutBetterCar = () => {
  return (
    <View style={{ paddingVertical: 48, backgroundColor: "#0f172a" }}>
      <View style={{ alignSelf: "center", paddingHorizontal: 16 }}>
        <View style={{ alignItems: "center", marginBottom: 24 }}>
          <Image
            source={require("../assets/images/BetterCarlogo.png")}
            style={{ width: 300, height: 300, borderRadius: 12 }}
            resizeMode="contain"
          />
        </View>
        <View style={{padding:10, paddingHorizontal:15}}>
          <Text style={{     fontSize: 32,
    fontWeight: "bold",
    color: "#76A9FA", marginBottom: 16 }}>
            Why Choose BetterCar?
          </Text>
          <Text style={{fontSize: 18, color: "#ccc", marginBottom: 16 }}>
            BetterCar's advanced fuel monitoring system combines cutting-edge IoT sensors with intelligent software to
            provide complete visibility over your personal or fleet's fuel consumption.
          </Text>
          <FlatList
            style={{ maxHeight: 200, flexShrink: 1 }}
            data={features}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
                <Icon name="check-circle" size={20} color="#3b82f6" style={{ marginRight: 8 }} />
                <Text style={{ color: "#ccc" }}>{`${index + 1}. ${item}`}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default AboutBetterCar;
