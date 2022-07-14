import React, { useEffect, useState } from 'react';

import { getPhoto } from '@/api/photo';
import { DetailScreenProps } from '@/router/types';
import { PhotoType } from '@/types';
import contants from '@/config/constants';
import DetailPresenter from './DetailPresenter';

const DetailContainer = ({ route }: DetailScreenProps) => {
  const [data, setData] = useState<PhotoType | null>(null);

  const displayData = async () => {
    const category = route.name.startsWith('ToDest') ? 'TODEST' : 'TORIDE';
    const id = route.params.id;
    const result: PhotoType = await getPhoto({ category, id });
    if (result) setData(result);
  };

  useEffect(() => {
    displayData();
  }, []);

  return (
    <DetailPresenter
      data={data}
      photoUiWidth={contants.photoSpec.PHOTO_UI_WIDTH}
      photoUiHeight={contants.photoSpec.PHOTO_UI_HEIGHT}
    />
  );
};

export default DetailContainer;
