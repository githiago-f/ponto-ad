import React from 'react';
import { Panel } from 'components/PointPanel/styles';
import { DetailsList } from '@fluentui/react';
import { usePointListHooks } from './hooks';

export const PointList = () => {
  const { notes, formatList } = usePointListHooks();

  return (
    <Panel className="ms-depth-8">
      <DetailsList
        items={notes.map(formatList)}
      />
    </Panel>
  );
};
