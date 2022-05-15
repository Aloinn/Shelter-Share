export interface Shelter {
  id?: string;
  name: string;
  long: string;
  lat: string;
  address: string;
}

export interface Request {
  uid: string;
  shelterId: string;
  address: string;
  content: string;
}
