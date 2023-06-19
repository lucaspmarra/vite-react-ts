const API_URL = 'https://node-juntos-somos-mais.onrender.com/api/photos';

export const getPhotos = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch photos.');
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
