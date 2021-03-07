import { IColumn } from '@fluentui/react';
import { useCallback, useEffect, useState } from 'react';

type ClickFn = ((ev?: any, column?: IColumn | undefined) => void) | undefined

export const useListHooks = (items: any[]) => {
  const [sortedItems, setSortedItems] = useState(items);
  const [columns, setColumns] = useState([] as IColumn[]);

  function sortItems<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
    const key = columnKey as keyof T;
    return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
  }

  useEffect(() => {
    setColumns([
      {
        name: 'ID da entrada',
        key: 'id',
        minWidth: 100
      },
      {
        name: 'Horário',
        key: 'time',
        minWidth: 100
      },
      {
        name: 'Mês',
        key: 'month',
        minWidth: 100
      },
      {
        name: 'Dia',
        key: 'day',
        minWidth: 100
      },
      {
        name: 'Tipo da entrada',
        key: 'type',
        minWidth: 100
      }
    ]);
  }, []);

  const onClickColumn: ClickFn = useCallback((ev, column) => {
    ev?.preventDefault();
    if(!column) { return; }
    let isSortedDescending = column.isSortedDescending;

    if (column.isSorted) {
      isSortedDescending = !isSortedDescending;
    }

    const sorted = sortItems(sortedItems, column.fieldName!, isSortedDescending);

    setSortedItems(sorted);
    setColumns(curColumns => curColumns.map(col => {
      col.isSorted = col.key === column.key;

      if (col.isSorted) {
        col.isSortedDescending = isSortedDescending;
      }

      return col;
    }));
  }, [sortedItems]);
  
  return {
    onClickColumn,
    columns,
    sortedItems
  };
};
