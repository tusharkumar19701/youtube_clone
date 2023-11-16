import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults:'50', 
    },
    headers: {
      'X-RapidAPI-Key': '7ac07f8c3dmshd8c7bf071fce64cp102899jsn54b7b66f7447',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };  

  export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }