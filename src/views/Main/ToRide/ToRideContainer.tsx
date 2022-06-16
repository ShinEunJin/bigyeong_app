import React from 'react';
import { useQuery } from '@apollo/client';

import ToRidePresenter from './ToRidePresenter';
import { GET_PHOTOS } from '@/graphql/query';

const ToRideContainer = () => {
  const { loading, error, data } = useQuery(GET_PHOTOS);

  if (loading) console.log('loading', loading);
  if (error) console.log('error', error);
  else console.log('data', data);

  return <ToRidePresenter />;
};

export default ToRideContainer;
