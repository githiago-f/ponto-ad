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

  await new Promise((resolve, reject) => {
    request.onerror = function() {
      reject(this.error);
    };
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

  function getOne<T>(field: string, value: string): Promise<T> {
    const query = readStore()?.index(field).get(value);
    return new Promise((resolve, reject) => {
      query.onsuccess = function() {
        resolve(this.result);
      };
      query.onerror = function() {
        reject(this.error);
      };
    });
  }

  function getAll<T>(query?: string): Promise<T[]> {
    const readRequest = readStore().getAll(query);
    return new Promise((resolve, reject) => {
      readRequest.onsuccess = function() {
        resolve(readRequest.result as T[]);
      };
      readRequest.onerror = function() {
        reject(this.error);
      };
    });
  }

  function create<T>(entity: T): Promise<IDBValidKey> {
    const writeRequest = writeStore().put(entity);
    return new Promise((resolve, reject) => {
      writeRequest.onsuccess = function() {
        resolve(writeRequest.result);
      };
      writeRequest.onerror = function() {
        reject(this.error);
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
