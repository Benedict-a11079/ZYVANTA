
const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Fetch all manufacturers
export async function getManufacturers() {
  try {
    const response = await fetch(`${API_URL}/manufacturers`);

    if (!response.ok) {
      throw new Error("Failed to fetch manufacturers");
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Manufacturer API error:", error);
    throw error;
  }
}

// Fetch models, optionally filtered by manufacturer
export async function getModels(manufacturerId) {
  try {
    const url = manufacturerId
      ? `${API_URL}/models?manufacturer_id=${encodeURIComponent(manufacturerId)}`
      : `${API_URL}/models`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch car models");
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Car models API error:", error);
    throw error;
  }
}

// Fetch variants belonging to a model
export async function getVariants(modelId) {
  try {
    const response = await fetch(
      `${API_URL}/variants?model_id=${encodeURIComponent(modelId)}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch car variants");
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Variants API error:", error);
    throw error;
  }
}
