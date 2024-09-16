import axios from "axios";
import { User } from "../utils/types";
import appAxios from "./appAxios";

const getMyApplications = () => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_API_URL}/users/userInfo`,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEyMyIsImlhdCI6MTcwNTc4MTUwOSwiZXhwIjoxNzA1NzgyOTQ5fQ.ey5xME7-SGhhhYe2G15rA6RCGThrBEXHdxLDX7FzRYs",
      },
    };

    axios
      .request(config)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error("Error fetching users info:", error);
    throw error;
  }
};

const getAllApplications = () => {
  var userToken = localStorage.getItem("userToken");

  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_API_URL}/applications/`,
      headers: {
        Authorization: "Bearer " + userToken,
      },
    };

    axios
      .request(config)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error("Error fetching users info:", error);
    throw error;
  }
};

export default { getMyApplications, getAllApplications };
