import { DataApiAnimeInterface } from "../../interfaces/challengeAnime";
import { AxiosResponse } from "axios";
import axiosInstance from "./axiosConfig";
import { ResponseApiInterface } from "../../interfaces/generals";
import { initialDataApiAnime } from "../../interfaces/initialData";

const getListAnime = async (page: number, limit: number, search: string): Promise<DataApiAnimeInterface> => {
  try {
    const { data }: AxiosResponse<ResponseApiInterface<DataApiAnimeInterface | null>> = await axiosInstance.get(`getAll?page=${page}&limit=${limit}&search=${search}`);
    return data?.data || initialDataApiAnime;
  } catch (error) {
    console.error("Error fetching anime list:", error);
    throw error;
  }
};

export { getListAnime };
