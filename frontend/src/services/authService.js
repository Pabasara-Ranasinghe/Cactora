
import axios from "axios";

const API_URL = "http://localhost:8081/api/auth";

const authService = {
  async register(userData) {
    const response = await axios.post(
      `${API_URL}/register`,
      userData
    );

    return response.data;
  },

  async login(credentials) {
    const response = await axios.post(
      `${API_URL}/login`,
      credentials
    );

    return response.data;
  },
};

export default authService;