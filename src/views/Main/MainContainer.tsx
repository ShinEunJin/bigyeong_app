import React from 'react';
import {useQuery, gql} from '@apollo/client';

import MainPresenter from './MainPresenter';

const MainContainer = () => {
  const GET_PHOTOS = gql`
    query getPhotos {
      photos {
        id
        title
        description
      }
    }
  `;

  const {loading, error, data} = useQuery(GET_PHOTOS);

  if (loading) console.log('loading', loading);
  if (error) console.log('error', error);
  if (data) console.log('data', data.photos[0].title);

  return <MainPresenter />;
};

export default MainContainer;
