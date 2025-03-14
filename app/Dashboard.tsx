import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { fetchIoTData } from "./API/IOT-api.jsx";

interface FuelData {
  fuelLevel: number;
  mileage: number;
}

const Dashboard: React.FC = () => {
  const [fuelData, setFuelData] = useState<FuelData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data: FuelData = await fetchIoTData();
        setFuelData(data);
        setError(null); // Clear previous error on success
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      }
    };

    getData();
    const interval = setInterval(getData, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{    flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#162235",}}>
      {error ? (
        <Text style={{ color: "red" }}>{error}</Text>
      ) : (
        <>
          <Text style={{color:'#ccc'}}>Fuel Level: {fuelData?.fuelLevel ?? "Loading..."} L</Text>
          <Text style={{color:'#ccc'}}>Mileage: {fuelData?.mileage ?? "Loading..."} km</Text>
        </>
      )}
    </View>
  );
};

export default Dashboard;
