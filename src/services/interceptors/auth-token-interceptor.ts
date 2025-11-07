import type {
  AxiosRequestInterceptorUse,
  InternalAxiosRequestConfig,
} from "node_modules/axios/index.d.cts";

/**
 * Request interceptor to add auth header when available.
 */
export const TokenInterceptor = async (config: InternalAxiosRequestConfig) => {
//   if (authToken) {
//     debugger;
//     config.headers = config.headers ?? {};
//     // ensure we don't overwrite an explicit Authorization header
//     if (!("Authorization" in config.headers)) {
//       config.headers["Authorization"] = `Bearer ${authToken.accessToken}`;
//     }
//   }
  return config;
};
