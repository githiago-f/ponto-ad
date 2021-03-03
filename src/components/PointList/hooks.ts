import dayjs from 'dayjs';
import { Note } from 'point-ad';
import { useCallback, useEffect, useState } from 'react';
import { IndexedDB } from 'utils/indexedDB';

export const usePointListHooks = () => {
  const [notes, setNotes] = useState([] as Note[]);

  useEffect(() => {
    IndexedDB()
      .then(db => {
        db.getAll<Note>()
          .then(setNotes)
          .catch(console.error);
      })
      .catch(console.error);
  }, []);

  const formatList = useCallback((note: Note) => {
    return {
      'ID da entrada': note.id,
      'Horário': dayjs(note.date).format('HH:mm'),
      'Mês': dayjs(note.date).format('MMMM'),
      'Dia': dayjs(note.date).format('DD'),
      'Tipo de entrada': 'Entrada ' + note.note
    };
  }, []);

  return {
    notes,
    formatList
  };
};
