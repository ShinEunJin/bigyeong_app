import axiosInstance from './index';
import routes from './routes';

export const uploadPhoto = async (formData: any) => {
  try {
    const result = await axiosInstance.post(routes.photo, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    if (result.data) return result.data;
  } catch (error) {
    return { error };
  }
};

export const getPhotos = async (params: { category: 'TODEST' | 'TORIDE' }) => {
  try {
    const result = await axiosInstance.get(routes.photos, { params });
    if (result.data) return result.data;
  } catch (error) {
    return { error };
  }
};

export const getPhoto = async (params: {
  category: 'TODEST' | 'TORIDE';
  id: string;
}) => {
  try {
    const result = await axiosInstance.get(routes.photo, { params });
    if (result.data) return result.data;
  } catch (error) {
    return { error };
  }
};
