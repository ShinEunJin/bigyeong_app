import axiosInstance from './index';
import routes from './routes';

export const uploadPhoto = async (formData: FormData) => {
  try {
    const result = await axiosInstance.post(routes.photo, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    if (result.data) return result.data;
  } catch (error) {
    return { error };
  }
};

export const getPhotos = async () => {
  try {
    const result = await axiosInstance.get(routes.photos);
    if (result.data) return result.data;
  } catch (error) {
    return { error };
  }
};
