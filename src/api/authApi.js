import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { clearUser, setUser } from '../store/slices/authSlice';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5892/api/auth', // Replace with your backend API
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      if (token) {
        headers.set('Authorization', `Bearer ${token}`); // Set Authorization header
      }
      return headers;
    },
    credentials: 'include', // Sends cookies with requests
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userData) => ({
        url: '/sign-up',
        method: 'POST',
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials, // Send email and password
      }),
    }),
    getCurrentUser: builder.query({
      query: () => '/current-user', // Backend endpoint to get user info
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch {
          dispatch(clearUser());
        }
      }
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useSignupMutation, useGetCurrentUserQuery, useLogoutMutation, useLoginMutation } = authApi;
