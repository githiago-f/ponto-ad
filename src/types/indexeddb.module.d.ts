declare module 'indexeddb' {
  type IndexedDBResult = {
    getBy<T>(field: string, value: IDBKeyRange): Promise<T[]>,
    readStore(storeName?: string): IDBObjectStore,
    writeStore(storeName?: string): IDBObjectStore,
    create<T>(entity: T): Promise<IDBValidKey>,
    deleteById(id: number): Promise<unknown>
  }
}
