
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
    throw error;
  }
};
