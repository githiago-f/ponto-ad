import { createNote } from 'factories/note';
import { Note } from 'point-ad';
import { useCallback } from 'react';
import { IndexedDB } from 'services/indexedDB-service';

export const usePointPanelHooks = () => {
  const addNote = useCallback(() => {
    IndexedDB().then(db => {
      createNote(2)
        .then(note => {
          db.create<Note>(note)
            .then(console.log)
            .catch(console.error);
        })
        .catch(console.error);
    });
  }, []);

  return {
    addNote
  };
};
