import axios from 'axios';

const API_KEY = '33885883-b95f37344ff62663f5727aa4e';
const BASE_URL =
  `https://pixabay.com/api/?key=${API_KEY}&`;

export async function fetchImages(value, page) {
  const apiFecthImages = await axios.get(
    `${BASE_URL}q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
  );
  return apiFecthImages;
}