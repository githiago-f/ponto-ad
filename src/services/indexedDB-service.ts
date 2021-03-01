import { Note } from 'point-ad';

let db: IDBDatabase, request: IDBOpenDBRequest;

const PONTO_DB = 'ponto_db';
const NOTES = 'notes';

const createDB = () => {
  db = request.result;
  const store = db.createObjectStore(NOTES, { 
    keyPath: 'id', 
    autoIncrement: true 
  });

  store.createIndex('date', 'date');
  store.createIndex('location', 'location');
  store.createIndex('note', 'note');
};

export async function IndexedDB() {
  request = indexedDB.open(PONTO_DB);
  request.onupgradeneeded = () => createDB();

  await new Promise(resolve => {
    request.onsuccess = () => { 
      db = request.result;
      resolve(db);
    };
  });

  function readStore(storeName = NOTES) {
    const ctx = db.transaction(storeName, 'readonly');
    return ctx.objectStore(storeName);
  }

  function writeStore(storeName = NOTES) {
    const ctx = db.transaction(storeName, 'readwrite');
    return ctx.objectStore(storeName);
  }

  function getOne(field: string, value: string): Promise<Note> {
    const query = readStore()?.index(field).get(value);
    return new Promise(resolve => {
      query.onsuccess = function() {
        resolve(this.result);
      };
    });
  }

  function getAll(query?: string): Promise<Note[]> {
    const notes = readStore().getAll(query);
    return new Promise((resolve) => {
      notes.onsuccess = function() {
        resolve(notes.result as Note[]);
      };
    });
  }

  function create(note: Note): Promise<IDBValidKey> {
    const req = writeStore().put(note);
    return new Promise(resolve => {
      req.onsuccess = () => {
        resolve(req.result);
      };
    });
  }

  return {
    getOne,
    readStore,
    create,
    getAll
  };
}
