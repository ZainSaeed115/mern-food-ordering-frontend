import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useAuth0 } from "@auth0/auth0-react";

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  const { getAccessTokenSilently } = useAuth0(); // Get access to Auth0 methods
  const accessToken = await getAccessTokenSilently(); // Get the access token

  // Modify headers to include the token
  const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers) => {
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    }
  });

  // Continue with the base query
  return baseQuery(args, api, extraOptions);
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User"],
  endpoints: () => ({})
});
