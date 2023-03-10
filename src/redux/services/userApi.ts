import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "types.ts";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${JSON.parse(localStorage.getItem("user") || "{}")}`
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getUserDataById: builder.query<IUser, string | void>({
      query: (id) => `/users/${id}`,
    }),
    updateUserData: builder.mutation({
      query: (body) => {
        return {
          url: `/users/${body.id}`,
          method: "put",
          body,
        };
      },
    }),
  }),
});

export const { useGetUserDataByIdQuery, useUpdateUserDataMutation } = userApi;
