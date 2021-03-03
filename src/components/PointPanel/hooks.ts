import { createNote } from 'factories/note';
import { IndexedDBResult } from 'indexeddb';
import { Note } from 'point-ad';
import { useCallback, useEffect, useState } from 'react';
import { IndexedDB } from 'utils/indexedDB';

export const usePointPanelHooks = () => {
  const [db, setDb] = useState(undefined as undefined | IndexedDBResult);
  const [noteNum, setNote] = useState(1);

  useEffect(() => {
    const today = new Date().getDate();
    const filterByDate = (i: Note) => i.date.getDate() === today;
    IndexedDB()
      .then(async db => {
        setDb(db);
        const byDate = await db.getAll<Note>();
        const count = byDate.filter(filterByDate).length + 1;
        setNote(count);
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
