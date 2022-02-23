import axios from "axios";

export const categoriesGetApi = async (category) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
