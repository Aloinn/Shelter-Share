export interface Shelter {
  id?: string;
  name: string;
  long: number;
  lat: number;
  address: string;
}

export interface Request {
  uid: string;
  shelterId: string;
  address: string;
  content: string;
}
