import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Dimensions, KeyboardTypeOptions } from "react-native";

const { height } = Dimensions.get("window");

const ContactForm = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const fields = [
    { placeholder: "Name", type: "default" as KeyboardTypeOptions },
    { placeholder: "Email", type: "email-address" as KeyboardTypeOptions },
    { placeholder: "Company", type: "default" as KeyboardTypeOptions },
    { placeholder: "Phone", type: "phone-pad" as KeyboardTypeOptions },
    { placeholder: "Number of Vehicles", type: "number-pad" as KeyboardTypeOptions },
    { placeholder: "Message", type: "default" as KeyboardTypeOptions, multiline: true, height: 100, textAlignVertical: "top" as const },
  ];

  return (
    <View
      style={{
        height: height,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 5,
        backgroundColor: "#0f172a",
        paddingHorizontal: 5,
      }}
    >
      <View style={{ maxWidth: "100%", alignSelf: "center", paddingHorizontal: 12 }}>
        <Text style={{ fontSize: 32,
    fontWeight: "bold",
    color: "#76A9FA", textAlign: "center", marginBottom: 36 }}>
          Ready to Optimize Your Fleet?
        </Text>
        <View style={{ gap: 24, justifyContent: "center" }}>
          {fields.map((field, index) => (
            <TextInput
              key={index}
              placeholder={field.placeholder}
              placeholderTextColor="#ccc"
              keyboardType={field.type}
              multiline={field.multiline || false}
              style={[
                styles.input,
                {
                  borderColor: focusedField === field.placeholder ? "#3b82f6" : "#1F2937",
                  borderWidth: 2,
                },
                field.height ? { height: field.height, textAlignVertical: field.textAlignVertical } : {},
              ]}
              onFocus={() => setFocusedField(field.placeholder)}
              onBlur={() => setFocusedField(null)}
              importantForAccessibility="no-hide-descendants" // Disables default yellow ring
            />
          ))}
          <View style={{ alignItems: "center", marginTop:12 }}>
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
    flex: 1,
    backgroundColor: "#1F2937",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 8,
    outlineStyle: "none", // Disables browser focus outline in web environments
  },
  button: {
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
};

export default ContactForm;
