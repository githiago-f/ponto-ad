import React from 'react';
import { Panel } from 'components/PointPanel/styles';
import { DetailsList } from '@fluentui/react';

export const PointList = () => {
  return (
    <Panel className="ms-depth-8">
      <DetailsList
        items={[
          {
            day: 'Quinta-feira'
          }
        ]}
      />
    </Panel>
  );
};
