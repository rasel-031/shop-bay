import axios from "axios";

export const individualProductGetApi = async (id) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    return error;
  }
};
