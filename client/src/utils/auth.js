import axios from "axios";

const fetchAuth = async () => {
  try {
    const response = await axios.get("http://localhost:3310/api/auth/checkauth", {
      withCredentials: true,
    });
    return response.data.user;
  } catch (err) {
    return null;
  }
};

export default fetchAuth;
