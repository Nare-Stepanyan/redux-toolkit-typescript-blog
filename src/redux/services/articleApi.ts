import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IArticle } from "types.ts";

export const articleApi = createApi({
  reducerPath: "articleApi",
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
    getArticles: builder.query<Array<IArticle>, number | void>({
      query: () => "/articles",
    }),
    getArticleById: builder.query<IArticle, string | void>({
      query: (id) => `/articles/${id}`,
    }),
    getArticlesBySearch: builder.query<Array<IArticle>, string>({
      query: (searchTerm) => `articles?title_like=${searchTerm}`,
    }),
    createArticle: builder.mutation({
      query: (body) => {
        return {
          url: "/articles",
          method: "post",
          body,
        };
      },
    }),
    addCommentToArticle: builder.mutation({
      query: ({ id, body }) => {
        return {
          url: `/articles/${id}`,
          method: "PATCH",
          body,
        };
      },
    }),
  }),
});

export const {
  useCreateArticleMutation,
  useAddCommentToArticleMutation,
  useGetArticlesQuery,
  useGetArticleByIdQuery,
  useGetArticlesBySearchQuery,
} = articleApi;
