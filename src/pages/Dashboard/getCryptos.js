import axios from "axios";
import { BASE_URL } from "../../utils/variables";

export const getCryptos = async ({ setCryptos }) => {
  try {
    const { data } = await axios.get(BASE_URL);
    setCryptos(data);
  } catch (error) {
    console.log(error);
  }
};
