import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
  AxiosError,
} from "axios";
import { TokenInterceptor } from "./interceptors/auth-token-interceptor";

type Nullable<T> = T | null;

export interface ApiError {
  message: string;
  status?: number;
  data?: any;
  isAxiosError?: boolean;
}

const DEFAULT_TIMEOUT = 30_000; // 30s

const getEnvBaseUrl = (): string | undefined => {
  return (globalThis as any).process?.env?.API_BASE_URL ?? "SET_API_URL!!!";
};

const apiBaseUrl = getEnvBaseUrl() ?? "/";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: apiBaseUrl,
  timeout: DEFAULT_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(TokenInterceptor);

/**
 * Override the instance baseURL at runtime
 */
export function setBaseURL(url?: string) {
  axiosInstance.defaults.baseURL = url ?? getEnvBaseUrl();
}

/**
 * Low-level request helper
 */
export async function request<T = any>(config: AxiosRequestConfig): Promise<T> {
  const res = await axiosInstance.request<T>(config);
  // prefer .data payload; if envelope exists, caller can type accordingly
  return res.data as T;
}

/**
 * Convenience helpers
 */
export async function get<T = any>(
  url: string,
  params?: any,
  config?: Omit<AxiosRequestConfig, "params" | "url" | "method">
): Promise<T> {
  return request<T>({ method: "GET", url, params, ...config });
}

export async function post<T = any>(
  url: string,
  data?: any,
  config?: Omit<AxiosRequestConfig, "data" | "url" | "method">
): Promise<T> {
  return request<T>({ method: "POST", url, data, ...config });
}

export async function put<T = any>(
  url: string,
  data?: any,
  config?: Omit<AxiosRequestConfig, "data" | "url" | "method">
): Promise<T> {
  return request<T>({ method: "PUT", url, data, ...config });
}

export async function del<T = any>(
  url: string,
  params?: any,
  config?: Omit<AxiosRequestConfig, "params" | "url" | "method">
): Promise<T> {
  return request<T>({ method: "DELETE", url, params, ...config });
}

export async function patch<T = any>(
  url: string,
  data?: any,
  config?: Omit<AxiosRequestConfig, "data" | "url" | "method">
): Promise<T> {
  return request<T>({ method: "PATCH", url, data, ...config });
}

/**
 * Expose the underlying axios instance for advanced use (interceptors, uploads, etc.)
 */

export { axiosInstance as client, axiosInstance as apiClient };
