declare module 'point-ad' {
  type GeoPoint = { 
    lat: number; 
    lng: number; 
  };

  type Note = {
    date: Date;
    note: number;
    location: GeoPoint;
    id?: number;
  }
}
