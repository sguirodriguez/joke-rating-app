import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Request, SendResponse } from "./types";

// const BASE_URL = "https://jsonplaceholder.typicode.com/";
const BASE_URL = "http://192.168.0.13:3332/"; // deve ser usado o IP da máquina para bater no back end

const api = axios.create({
  baseURL: BASE_URL,
});

export const request = async ({
  method,
  path,
  body,
  headers,
  params,
}: Request) => {
  try {
    const { status, statusText, data } = await api.request({
      headers,
      method,
      url: path,
      data: body,
      params,
    });

    return sendResponse({
      status,
      message: data?.message || statusText,
      data: data.data ? data.data : data,
    });
  } catch (error: any) {
    return sendResponse({
      status: error?.response?.status,
      message:
        error.error ||
        error.response?.data?.error ||
        error.message ||
        defaultMessage,
    });
  }
};

const defaultMessage =
  "Serviço indisponível, verifique sua conexão com a internet, ou tente novamente mais tarde!";

const sendResponse = ({ status, message, data }: SendResponse) => {
  if (status === 401) {
    AsyncStorage.clear();
    return { error: "expired" };
  }

  if (status != 200 || !status) {
    return { error: !message ? defaultMessage : message, status };
  }

  return { error: null, data };
};

export default api;
