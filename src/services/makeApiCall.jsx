import axiosInstances from "./baseApi";

export const makeApiCall = async (config) => {
  try {
    const response = await axiosInstances.request(config);
    return response;
  } catch (error) {
    if (
      e.response.status === 401 &&
      e.response.data.errorMessage
        .toLowerCase()
        .includes("error occured while validating token")
    ) {
     
        localStorage.setItem("token", "");
        window?.location?.reload();
      
    }
    throw e.response;
  }
};
