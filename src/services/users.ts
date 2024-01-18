import axios from "axios";

const UserService = {
  getCurrentUser: async (userToken: string) => {
    try {
      const response = await axios.get(`/users/65a2781e31279a17a8cfedcd`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default UserService;

