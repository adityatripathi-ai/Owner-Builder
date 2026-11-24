
const API_URL = "https://api.ownerbuilderssoftware.com/api";

export const getAppRedirectUrl = async (deviceType) => {
  try {
    const response = await fetch(
      `${API_URL}/app/redirect?source=homepage&response=json`,
      {
        method: "GET",
        headers: {
          "x-device-type": deviceType,
        },
      }
    );

    const result = await response.json();

    console.log("Device Type:", deviceType);
    console.log("API Response:", result);
    console.log("Redirect URL:", result?.data?.redirectUrl);

    if (
      !response.ok ||
      !result.success ||
      !result.data?.redirectUrl
    ) {
      throw new Error(
        result.message || "Download link not available"
      );
    }

    return result.data.redirectUrl;

  } catch (error) {
    console.error("App Redirect API Error:", error);
    throw error;
  }
};
