import axios from "axios";
const API_URL: string = process.env.APP_API_URL as string;

export const fetchTaxBrackets = async (enpoint: string) => {
  const url = API_URL + enpoint;
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
};
