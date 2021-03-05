import React from 'react';
import { Panel } from 'components/PointPanel/styles';
import { DetailsList, IColumn } from '@fluentui/react';
import { usePointListHooks } from './hooks';
import { Title } from 'components/Typography/Title';

export const PointList = () => {
  const { notes, formatList, selectItems } = usePointListHooks();

  return (
    <Panel className="ms-depth-8">
      <div hidden={notes.length === 0}>
        <DetailsList
          items={notes.map(formatList)}
          onActiveItemChanged={ selectItems }
        />
      </div>
      <div hidden={notes.length > 0}>
        <Title>Nenhum apontamento encontrado.</Title>
      </div>
    </Panel>
  );
};
