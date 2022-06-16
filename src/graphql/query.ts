import { gql } from '@apollo/client';

export const GET_PHOTOS = gql`
  query GetPhotos {
    photos {
      id
    }
  }
`;

export const UPLOAD_PHOTO = gql`
  mutation UploadPhoto($photo: Upload!) {
    uploadPhoto(photo: $photo)
  }
`;
