import { DBSchema } from 'indexeddb';
import { Note } from 'point-ad';

let db: IDBDatabase, request: IDBOpenDBRequest;

const createDB = (schema: DBSchema) => {
  db = request.result;

  Object.keys(schema).forEach(storeName => {
    const store = db.createObjectStore(storeName, {
      keyPath: 'id'
    });

    Object.keys(schema[storeName]).forEach(columnName => {
      store.createIndex(columnName, columnName, schema[storeName][columnName]);
    });
  });
};

const PONTO_DB = 'ponto_db';
const NOTES = 'notes';

const schema: DBSchema = {
  notes: {
    user: { unique: false },
    location: { unique: false },
    note: { unique: false },
    
  }
};

export async function IndexedDB() {
  request = indexedDB.open(PONTO_DB);
  request.onupgradeneeded = () => createDB(schema);

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
    create
  };
}
