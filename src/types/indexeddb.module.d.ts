declare module 'indexeddb' {
  type IndexedDBResult = {
    getOne<T>(field: string, value: string): Promise<T>,
    readStore(storeName?: string): IDBObjectStore,
    writeStore(storeName?: string): IDBObjectStore,
    getAll<T>(query?: string | undefined): Promise<T[]>,
    create<T>(entity: T): Promise<IDBValidKey>
  }
}
