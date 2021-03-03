import { Note } from 'point-ad';

export const createNote = (noteType: number): Promise<Note> => {
  return new Promise((resolve, reject) => {
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const coords = position.coords;
        return resolve({
          date: new Date(),
          note: noteType,
          location: {
            lat: coords.latitude,
            lng: coords.longitude
          }
        });
      });
      return;
    }
    reject(new Error('Sem permissão para acessar a localização'));
  });
};
