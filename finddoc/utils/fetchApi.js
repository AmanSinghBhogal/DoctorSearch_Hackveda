import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '4bf3711ca8mshaa712d9f36860e9p1a0cd9jsna4cf72b80887' ,
    },
  });
    
  return data;
}