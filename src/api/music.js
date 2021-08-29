import { axios } from "../services/api";

const music = async (params) => {
  return await axios.get(
    `us/rss/topalbums/limit=${process.env.REACT_APP_API_BASE_LIMIT}/json`
  );
};

export default music;
