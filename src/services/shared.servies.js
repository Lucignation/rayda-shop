import axiosInstance from "../config/axios.config";

export const getProducts = async (url) => {
  const res = await axiosInstance.get(url);
  return res;
};
