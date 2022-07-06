import React from 'react';
import DetailPresenter from './DetailPresenter';

const DetailContainer = ({ route }) => {
  console.log(route);
  return <DetailPresenter />;
};

export default DetailContainer;
