
const API_URL = "https://api.ownerbuilderssoftware.com/api";

// Detect user's device
const detectDeviceType = () => {
  const userAgent = navigator.userAgent || "";

  if (/android/i.test(userAgent)) {
    return "android";
  }

  if (/iphone|ipad|ipod/i.test(userAgent)) {
    return "ios";
  }

  return null;
};

// Detect device + API call + redirect
export const redirectToAppStore = async () => {
  try {
    const deviceType = detectDeviceType();

    if (!deviceType) {
      throw new Error("Please open this website on an Android or iOS device.");
    }

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
        result.message || "Download link not available."
      );
    }

    // Redirect to Play Store or App Store
    window.location.href = result.data.redirectUrl;

  } catch (error) {
    console.error("App redirect error:", error);

    alert(
      error.message || "Something went wrong. Please try again."
    );
  }
};
