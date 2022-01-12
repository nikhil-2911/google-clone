import axios from "axios";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const ENGINE_ID = process.env.REACT_APP_GOOGLE_ENGINE_ID;

export const searchData = async (term) => {
  const response = await axios.get(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE_ID}&q=${term}`
  );
  return response.data;
};
