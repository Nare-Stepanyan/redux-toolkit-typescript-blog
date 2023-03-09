import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    createArticle: builder.mutation({
      query: (body) => {
        return {
          url: "/articles",
          method: "post",
          body,
        };
      },
    }),
  }),
});

export const { useCreateArticleMutation } = articleApi;
