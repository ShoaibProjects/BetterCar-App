import axios from "axios";

const IOT_DEVICE_URL = "http://localhost:3000/fuelData"; // Replace with actual IP

// Define an interface for the expected response structure
export interface FuelData {
  fuelLevel: number;
  mileage: number;
}

// Define the function with a return type
export const fetchIoTData = async (): Promise<FuelData> => {
  try {
    const response = await axios.get<FuelData>(IOT_DEVICE_URL, { timeout: 5000 });

    if (!response.data || typeof response.data.fuelLevel !== "number" || typeof response.data.mileage !== "number") {
      throw new Error("Invalid data format");
    }

    return response.data; // Example: { fuelLevel: 75, mileage: 1234 }
  } catch (error) {
    console.error("Error fetching IoT data:", error);

    if (axios.isAxiosError(error)) {
      if (error.code === "ECONNABORTED") {
        throw new Error("Request timed out. Check hotspot connection.");
      }
      if (error.response) {
        throw new Error(`Server responded with status ${error.response.status}`);
      }
      throw new Error("Could not connect to IoT device. Ensure hotspot is active.");
    }

    throw new Error("An unexpected error occurred.");
  }
};

// ✅ If you need a default export, uncomment this line
// export default fetchIoTData;
