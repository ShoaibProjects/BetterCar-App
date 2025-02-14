import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchFuelData } from './API/IOT-api';

interface FuelData {
  fuelLevel: number;
  mileage: number;
}

const Dashboard: React.FC = () => {
  const [fuelData, setFuelData] = useState<FuelData | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchFuelData();
        setFuelData(data);
      } catch (error) {
        console.error('Error fetching fuel data:', error);
      }
    };
    getData();
  }, []);

  return (
    <View>
      <Text    style={{
      color: '#ccc'
    }}>Fuel Level: {fuelData?.fuelLevel ?? 'Loading...'} L</Text>
      <Text style={{
      color: '#ccc'
    }}>Mileage: {fuelData?.mileage ?? 'Loading...'} km</Text>
    </View>
  );
};

export default Dashboard;
