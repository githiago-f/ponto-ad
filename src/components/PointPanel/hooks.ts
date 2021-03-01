import { useCallback, useEffect, useState } from 'react';
import { IndexedDB } from 'services/indexedDB-service';

export const usePointPanelHooks = () => {
  const [notes, setNotes] = useState({});

  useEffect(() => {
    IndexedDB().then(db => {
      db.getOne('user', 'Thiago Dutra')
        .then(setNotes);
    });
  }, []);

  useEffect(() => console.log(notes), [notes]);

  const addNote = useCallback(() => {
    IndexedDB().then(db => {
      db.create({
        id: 1,
        user: 'Thiago Dutra',
        date: new Date(),
        note: 1
      }).then(console.log);
    });
  }, []);

  return {
    notes,
    addNote
  };
};
