import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { LucideFuel, LucideBarChart, LucideMonitor, LucideShieldCheck, LucideSettings, LucideStar, LucideLock, LucideDroplet } from 'lucide-react-native';
import * as Animatable from 'react-native-animatable';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ size: number, color: string }>;
}

const features: Feature[] = [
  { id: 1, title: 'Mileage Analysis', description: 'Accurately calculate the total mileage and fuel usage for each vehicle, helping you optimize performance and save on costs.', icon: LucideFuel },
  { id: 2, title: 'Expense Analytics', description: 'Get detailed reports and actionable insights to optimize fuel consumption and reduce operational costs across your fleet.', icon: LucideBarChart },
  { id: 3, title: 'Real-time Monitoring', description: 'Track fuel levels 24/7 with precision IoT sensors. Receive instant alerts for unauthorized activity, ensuring complete transparency and control.', icon: LucideMonitor },
  { id: 4, title: 'Fuel Refueling Assurance', description: 'Rest assured of accurate fuel levels after every refueling, eliminating doubts caused by fuel scams and malpractices.', icon: LucideShieldCheck },
  { id: 5, title: 'Repair Status Updates', description: 'Stay informed with real-time updates on the maintenance and repair status of your vehicle to minimize downtime and improve efficiency.', icon: LucideSettings },
  { id: 6, title: 'Petrol Station Ratings Database', description: 'Introducing a much-needed rating system for petrol stations to help you choose reliable stations with confidence.', icon: LucideStar },
  { id: 7, title: 'Theft Prevention', description: 'Our AI-powered algorithms detect suspicious patterns and alert you instantly in case of potential fuel theft, keeping your vehicle secure.', icon: LucideLock },
  { id: 8, title: 'All in One', description: 'BetterCar supports all fuel types, including Petrol, Diesel, and CNG vehicles.', icon: LucideDroplet },
];

const Features = () => {
  const [focusedCard, setFocusedCard] = useState<number | null>(null);

  // Handle press in to trigger the focus effect
  const handlePressIn = (id: number) => {
    setFocusedCard(id); // Set the card to be focused
  };

  // Handle press out to remove the focus effect
  const handlePressOut = () => {
    setFocusedCard(null); // Remove the focus when the user releases the card
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Smart Features for Smarter Management</Text>
      <View style={styles.grid}>
        {features.map((feature) => {
          const IconComponent = feature.icon;
          const isFocused = focusedCard === feature.id; // Check if the card is focused

          return (
            <Animatable.View
              key={feature.id}
              style={[styles.card, isFocused && styles.cardFocused]} // Apply focus effect when active
              onTouchStart={() => handlePressIn(feature.id)} // Handle press down
              onTouchEnd={handlePressOut} // Remove focus when released
            >
              <View style={styles.iconContainer}>
                <IconComponent size={40} color="#3b82f6" />
              </View>
              <Text style={styles.title}>{feature.title}</Text>
              <Text style={styles.description}>{feature.description}</Text>
            </Animatable.View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: "#162235",
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#60A5FA',
    padding: 10,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 30, // Adjust spacing
  },
  card: {
    width: '95%',
    backgroundColor: '#1e293b',
    padding: 30,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 4, // Light shadow for cards
  },
  cardFocused: {
    transform: [{ scale: 1.05 }], // Slight scale effect when focused
    elevation: 8, // Shadow increase on focus (Android)
    shadowColor: '#000', // Shadow effect (iOS)
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderWidth: 2,
    borderColor: '#60A5FA', // Border glow effect when focused
  },
  iconContainer: {
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'justify',
    marginTop: 4,
  },
});

export default Features;
