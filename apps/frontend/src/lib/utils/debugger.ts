
import type {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";

let httpMethod = "";
let endpnt = "";

export const debugResponse = async (
  response: AxiosResponse<any> | null,
  error: AxiosError<any> | null = null
) => {
  try {
    // Determina si es una respuesta exitosa o un error
    const method =
      (response ? response.config.method : error?.config?.method) || "UNKNOWN";
    const endpoint =
      (response ? response.config.url : error?.config?.url) || "UNKNOWN";

    httpMethod = method;
    endpnt = endpoint;
    const isSuccess =
      response && response.status >= 200 && response.status < 300;
    const color = isSuccess ? "[1;32m" : "[1;31m";

    const headers = response ? response.config.headers : error?.config?.headers;

    // Datos de la respuesta o error
    let data = isSuccess
      ? response?.data
      : error?.response?.data || "NO RES DATA";

    console.log(color, `${method}: ${endpoint} ${response?.status}`, "\n", {
      HEADER: headers,
      RESPONSE: { status: response?.status, data },
    });
  } catch (e) {
    console.log("ha ocurrido un error con debugger");
    console.error(`${httpMethod}: ${endpnt}`, {
      error: e,
      response,
      status: response?.status,
    });
  }
};

export const debugRequest = (config: AxiosRequestConfig) => {
  const color = "[1;32m";
  console.log(
    color,
    `Request ${config.method} ${config.url}\nHeaders: ${config.headers}\n${
      config.data ? "Payload: " + config.data : ""
    }`
  );
  return config;
};
