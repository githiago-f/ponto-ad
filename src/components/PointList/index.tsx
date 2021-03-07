import React from 'react';
import { Panel } from 'components/PointPanel/styles';
import { DetailsList, SelectionMode } from '@fluentui/react';
import { usePointListHooks } from './hooks/point.hooks';
import { useListHooks } from './hooks/list.hooks';
import { Title } from 'components/Typography/Title';

export const PointList = () => {
  const { notes, formatList, selectItems } = usePointListHooks();
  const { sortedItems, columns, onClickColumn } = useListHooks(notes.map(formatList));

  return (
    <Panel className="ms-depth-8">
      <div hidden={notes.length === 0}>
        <span>Entradas Hoje: {notes.length}</span>
        <DetailsList
          items={sortedItems}
          columns={columns}
          onActiveItemChanged={ selectItems }
          selectionMode={SelectionMode.single}
          onColumnHeaderClick={onClickColumn}
          setKey="id"
        />
      </div>
      <div hidden={notes.length > 0}>
        <Title>Nenhum apontamento encontrado.</Title>
      </div>
    </Panel>
  );
};
