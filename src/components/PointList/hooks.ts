import dayjs from 'dayjs';
import { IndexedDBResult } from 'indexeddb';
import { Note } from 'point-ad';
import { useCallback, useEffect, useState } from 'react';
import { IndexedDB } from 'utils/indexedDB';

export const usePointListHooks = () => {
  const [notes, setNotes] = useState([] as Note[]);
  const [db, setDb] = useState(undefined as undefined | IndexedDBResult);

  useEffect(() => {
    IndexedDB()
      .then(localDb => {
        const keyRange = IDBKeyRange.bound(
          dayjs().set('h', 0).set('m', 0).set('s', 0).toDate(), 
          dayjs().toDate(),
          false,
          true
        );

        localDb.getBy<Note>('date', keyRange)
          .then(setNotes)
          .catch(console.error);

        setDb(localDb);
      })
      .catch(console.error);
  }, []);

  const formatList = useCallback((note: Note) => {
    return {
      id: note.id,
      time: dayjs(note.date).format('HH:mm'),
      month: dayjs(note.date).format('MMMM'),
      day: dayjs(note.date).format('DD'),
      entry: 'Entrada ' + note.note
    };
  }, []);

  const selectItems = useCallback((item: {id: number}) => {
    console.log(item);
  }, []);

  return {
    notes,
    selectItems,
    formatList
  };
};
