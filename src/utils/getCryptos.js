import axios from 'axios';
import { BASE_URL_COINGECKO } from './variables';

export const getCryptos = async ({ setCryptos, setIsLoading }) => {
  setIsLoading(true);
  try {
    const { data } = await axios.get(BASE_URL_COINGECKO); //?
    setCryptos(data); //?
    setIsLoading(false);
  } catch (error) {
    console.log(error);
  }
};
