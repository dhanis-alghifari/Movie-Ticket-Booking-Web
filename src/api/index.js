import axios from "axios";

const fullURL = (path) => {
  return `https://www.omdbapi.com/${path}`;
};


export const handleNetworkError = (error) => {
  if (error.message === "Network request failed") {
    alert(
      "Kesalahan Jaringan",
      "Silakan periksa koneksi Anda dan coba kembali.",
      "iconNoInet"
    );
  }
  throw error;
};

const get =
  (api) =>
  async (param = "") => {
    try {
      return await axios(
        `${fullURL(api)}${param}`,
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
          },
        },
        { handleNetworkError }
      );
    } catch (err) {
      console.log(err);
    }
  };



export const getMovie = get("?apikey=31ccf49");


const API = {
getMovie,
};

export default API;
