declare module 'indexeddb' {
  type ColumnSchema = {
    unique: boolean;
  }
  type StoreSchema = Record<string, ColumnSchema>
  type DBSchema = Record<string, StoreSchema>
}
