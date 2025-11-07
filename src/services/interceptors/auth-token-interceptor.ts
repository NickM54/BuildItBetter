import type {
  AxiosRequestInterceptorUse,
  InternalAxiosRequestConfig,
} from "node_modules/axios/index.d.cts";

import auth from "@/services/auth";

/**
 * Request interceptor to add auth header when available.
 */
export const TokenInterceptor = async (config: InternalAxiosRequestConfig) => {
  const authToken = await auth.acquireTokenSilent({ scopes: [] });

  if (authToken) {
    config.headers = config.headers ?? {};
    // ensure we don't overwrite an explicit Authorization header
    if (!("Authorization" in config.headers)) {
      config.headers["Authorization"] = `Bearer ${authToken}`;
    }
  }
  return config;
};
