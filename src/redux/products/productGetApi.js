import axios from "axios";

export const productGetApi = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = response.data;
    return data;
  } catch (error) {
    return error;
  }
};
