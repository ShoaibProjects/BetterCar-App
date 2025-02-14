import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { LucideFuel, LucideBarChart, LucideMonitor, LucideShieldCheck, LucideSettings, LucideStar, LucideLock, LucideDroplet } from 'lucide-react-native';
import * as Animatable from 'react-native-animatable';

const features = [
  { id: 1, title: 'Mileage Analysis', description: 'Accurately calculate the total mileage and fuel usage for each vehicle, helping you optimize performance and save on costs.', icon: LucideFuel },
  { id: 2, title: 'Expense Analytics', description: 'Get detailed reports and actionable insights to optimize fuel consumption and reduce operational costs across your fleet.', icon: LucideBarChart },
  { id: 3, title: 'Real-time Monitoring', description: 'Track fuel levels 24/7 with precision IoT sensors. Receive instant alerts for unauthorized activity, ensuring complete transparency and control.', icon: LucideMonitor },
  { id: 4, title: 'Fuel Refueling Assurance', description: 'Rest assured of accurate fuel levels after every refueling, eliminating doubts caused by fuel scams and malpractices.', icon: LucideShieldCheck },
  { id: 5, title: 'Repair Status Updates', description: 'Stay informed with real-time updates on the maintenance and repair status of your vehicle to minimize downtime and improve efficiency.', icon: LucideSettings },
  { id: 6, title: 'Petrol Station Ratings Database', description: 'Introducing a much-needed rating system for petrol stations to help you choose reliable stations with confidence.', icon: LucideStar },
  { id: 7, title: 'Theft Prevention', description: 'Our AI-powered algorithms detect suspicious patterns and alert you instantly in case of potential fuel theft, keeping your vehicle secure.', icon: LucideLock },
  { id: 8, title: 'All in One', description: 'BetterCar supports all fuel types, including Petrol, Diesel, and CNG vehicles.', icon: LucideDroplet },
];

const FeaturesSection = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Smart Features for Smarter Management</Text>
        <View style={styles.grid}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Animatable.View key={feature.id} style={styles.card} animation="fadeInUp" delay={index * 100}>
                <IconComponent size={40} color="#3b82f6" />
                <Text style={styles.title}>{feature.title}</Text>
                <Text style={styles.description}>{feature.description}</Text>
              </Animatable.View>
            );
          })}
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
      paddingVertical: 20,
      paddingHorizontal: 16,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff',
      marginBottom: 20,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 12, // Adjust spacing
    },
    card: {
      width: '45%',
      backgroundColor: '#1e1e1e',
      padding: 12,
      borderRadius: 12,
      alignItems: 'center',
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
      textAlign: 'center',
      marginTop: 4,
    },
  });
  
  export default FeaturesSection;
