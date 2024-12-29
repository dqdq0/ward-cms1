const WP_API_URL = "YOUR_WORDPRESS_URL/wp-json/wp/v2";

export const fetchExpenses = async () => {
  try {
    const response = await fetch(`${WP_API_URL}/expenses`);
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return [];
  }
};

export const fetchAnalytics = async () => {
  try {
    const response = await fetch(`${WP_API_URL}/analytics`);
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return null;
  }
};

export const fetchSummary = async () => {
  try {
    const response = await fetch(`${WP_API_URL}/summary`);
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error fetching summary:", error);
    return null;
  }
};
