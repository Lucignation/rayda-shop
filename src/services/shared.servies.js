import axiosInstance from "../config/axios.config";

export const getProducts = async () => {
  const res = await axiosInstance.get();
  return res;
};
