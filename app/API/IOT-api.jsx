import axios from "axios";

const IOT_DEVICE_URL = "http://localhost:3000/fuelData"; // Replace with actual IP

export const fetchIoTData = async () => {
  try {
    const response = await axios.get(IOT_DEVICE_URL, { timeout: 5000 });

    if (!response.data || typeof response.data.fuelLevel !== "number" || typeof response.data.mileage !== "number") {
      throw new Error("Invalid data format");
    }

    return response.data; // Example: { fuelLevel: 75, mileage: 1234 }
  } catch (error) {
    console.error("Error fetching IoT data:", error);

    // Detect network errors (e.g., no connection to IoT device)
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
