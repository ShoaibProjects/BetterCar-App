import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { fetchIoTData } from "./API/IOT-api"; // Ensure path is correct

const Dashboard = () => {
  const [fuelData, setFuelData] = useState({ fuelLevel: 0, mileage: 0 });
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchIoTData();
        setFuelData(data);
        setError(null);
      } catch (err) {
        setError(err.message || "Unknown error");
      }
    };

    getData();
    const interval = setInterval(getData, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#162235" }}>
      {error ? (
        <Text style={{ color: "red" }}>{error}</Text>
      ) : (
        <>
          <Text style={{ color: "#ccc" }}>Fuel Level: {fuelData.fuelLevel} L</Text>
          <Text style={{ color: "#ccc" }}>Mileage: {fuelData.mileage} km</Text>
        </>
      )}
    </View>
  );
};

export default Dashboard;