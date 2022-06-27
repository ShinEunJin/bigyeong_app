import axios from 'axios';
import routes from './routes';

export const uploadPhoto = async (formData: FormData) => {
  try {
    const result = await axios.post(routes.photo, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    if (result.data) return result.data;
  } catch (error) {
    return { error };
  }
};
