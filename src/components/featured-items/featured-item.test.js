// import axiosInstance from "../../config/axios.config";

// const fetchData = async () => {
//   const res = await axiosInstance.get();
//   return res.data.data;
// };

// const mockData = fetchData();

// test("the data is an array of products", async () => {
//   const data = await fetchData();
//   expect(data).toMatchSnapshot(mockData);
// });

import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { rest } from "msw";
import { setupServer } from "msw/node";
import FeaturedItems from "./featured-items.component";
import { useGetPostsQuery } from "../../features/api/apiSlice";
import { store } from "../../store";
import jest from "jest";

const server = setupServer(
  rest.get(
    "https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b",
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: 1,
            name: "Gerald",
            title: "Byt from me",
            image: "This link to an image",
            bid: "N123,000",
          },
          {
            id: 2,
            name: "Gerald",
            title: "Byt from me",
            image: "This link to an image",
            bid: "N123,000",
          },
          {
            id: 3,
            name: "Gerald",
            title: "Byt from me",
            image: "This link to an image",
            bid: "N123,000",
          },
        ])
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Featured Products", () => {
  store.getState();
  it("renders correctly", async () => {
    const store = configureStore({
      reducer: () => ({ [useGetPostsQuery.reducerPath]: useGetPostsQuery.reducer }),
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(useGetPostsQuery.middleware),
    });

    const tree = renderer.create(
      <Provider store={store}>
        <FeaturedItems />
      </Provider>
    );

    await waitFor(() => {
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
