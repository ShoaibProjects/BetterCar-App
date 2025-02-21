import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View 
    style={{
      position: "absolute",
      top: 0,
      width: "100%",
      backgroundColor: "#0f172a",
      padding: 15,
      zIndex: 50,
    }}

    >
      {/* Header Container */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ color: "#76A9FA", fontSize: 20, fontWeight: "bold" }}>BetterCar</Text>

        {/* Mobile Menu Button */}
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <Text style={{ color: "#76A9FA", fontSize: 20 }}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Mobile Menu Items (Dropdown) */}
      {menuOpen && (
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity onPress={() => router.push("/features")}>
            <Text style={{ color: "gray" }}>Features</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/smallAbout")}>
            <Text style={{ color: "gray" }}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/pricing")}>
            <Text style={{ color: "gray" }}>Pricing</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/contact")}>
            <Text style={{ color: "gray" }}>Contact</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
