import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions } from "react-native";
const { height } = Dimensions.get('window'); 

const ContactForm = () => {
  return (
    <View style={{ height:height, justifyContent:'center', alignItems:'center', paddingVertical: 5, backgroundColor: "#0f172a", paddingHorizontal: 5,  }}>
      <View style={{ maxWidth: "100%", alignSelf: "center", paddingHorizontal:12}}>
        <Text style={{ fontSize: 28, fontWeight: "bold", color: "#fff", textAlign: "center", marginBottom: 24 }}>
          Ready to Optimize Your Fleet?
        </Text>
        <View style={{ gap: 16, justifyContent:'center'}}>
          <View style={{ flexDirection: "row", gap: 16, justifyContent:'center'}}>
            <TextInput placeholder="Name" placeholderTextColor="#ccc" style={styles.input} />
            <TextInput placeholder="Email" placeholderTextColor="#ccc" style={styles.input} keyboardType="email-address" />
          </View>
          <View style={{ flexDirection: "row", gap: 16 }}>
            <TextInput placeholder="Company" placeholderTextColor="#ccc" style={styles.input} />
            <TextInput placeholder="Phone" placeholderTextColor="#ccc" style={styles.input} keyboardType="phone-pad" />
          </View>
          <TextInput placeholder="Number of Vehicles" placeholderTextColor="#ccc" style={[styles.input, {width:"100%"}]} keyboardType="numeric" />
          <TextInput placeholder="Message" placeholderTextColor="#ccc" style={[styles.input, { height: 100, width:"100%", textAlignVertical: "top" }]} multiline />
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.button}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Get Your Free Consultation</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = {
  input: {
    // flex: 1,
    width: "48%" as const,
    backgroundColor: "#333",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
};

export default ContactForm;
