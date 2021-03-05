import dayjs from 'dayjs';
import { createNote } from 'factories/note';
import { IndexedDBResult } from 'indexeddb';
import { Note } from 'point-ad';
import { useCallback, useEffect, useState } from 'react';
import { IndexedDB } from 'utils/indexedDB';

export const usePointPanelHooks = () => {
  const [db, setDb] = useState(undefined as undefined | IndexedDBResult);
  const [noteNum, setNote] = useState(1);

  useEffect(() => {
    IndexedDB()
      .then(async db => {
        setDb(db);
        const keyRange = IDBKeyRange.bound(
          dayjs().set('h', 0).set('m', 0).set('s', 0).toDate(), 
          dayjs().toDate(), 
          false, 
          true
        );
        db.getBy<Note>('date', keyRange).then(entriesToday => {
          const count = entriesToday.length + 1;
          setNote(count);
        });
      })
      .catch(console.error);
  }, []);

  const addNote = useCallback(() => {
    if(db) {
      createNote(noteNum)
        .then(note => {
          db.create<Note>(note)
            .then(() => setNote(noteNum+1))
            .catch(console.error);
        })
        .catch(console.error);
    }
  }, [db, noteNum]);

  return {
    addNote,
    noteNum
  };
};
