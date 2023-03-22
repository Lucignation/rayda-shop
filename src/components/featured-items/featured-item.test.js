import axiosInstance from "../../config/axios.config";

const fetchData = async () => {
  const res = await axiosInstance.get();
  return res.data.data;
};

const mockData = fetchData();

test("the data is an array of products", async () => {
  const data = await fetchData();
  expect(data).toMatchSnapshot(mockData);
});
