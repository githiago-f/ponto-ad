import { useCallback } from 'react';
import { IndexedDB } from 'services/indexedDB-service';

export const usePointPanelHooks = () => {
  const addNote = useCallback(() => {
    IndexedDB().then(db => {
      if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
          const coords = position.coords;
          db.create({
            date: new Date(),
            note: 1,
            location: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          }).then(console.log)
            .catch(console.error);
        });
      }
    });
  }, []);

  return {
    addNote
  };
};
