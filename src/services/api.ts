const API_URL: string = process.env.APP_API_URL as string;

export const fetchTaxBrackets = async (enpoint: string) => {
  const url = API_URL + enpoint;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
};
