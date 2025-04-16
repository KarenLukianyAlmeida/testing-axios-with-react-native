import axios, { AxiosResponse } from "axios";
import { handleApiError } from "../utils/handleApiErrors";

const BASE_URL = "https://api.thecatapi.com";

const api = axios.create({
  baseURL: BASE_URL,
});

type CatImageResponse = {
  url: string;
};

export async function getCatImage(): Promise<string> {
  try {
    const response: AxiosResponse<CatImageResponse[]> = await api.get(
      "/v1/images/search"
    );
    return response.data[0].url;
  } catch (error) {
    throw handleApiError(error);
  }
}
