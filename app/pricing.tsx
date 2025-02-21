import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const PricingPage = () => {
  const plans = [
    { name: 'Basic', price: '$9.99/mo', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { name: 'Pro', price: '$19.99/mo', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
    { name: 'Premium', price: '$29.99/mo', features: ['All Features Included'] },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Choose Your Plan</Text>
      {plans.map((plan, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.planName}>{plan.name}</Text>
          <Text style={styles.price}>{plan.price}</Text>
          {plan.features.map((feature, idx) => (
            <Text key={idx} style={styles.feature}>• {feature}</Text>
          ))}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },
  planName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 18,
    color: '#666',
    marginVertical: 10,
  },
  feature: {
    fontSize: 16,
    color: '#444',
    marginVertical: 2,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PricingPage;
