export interface Shelter {
  id?: string;
  name: string;
  long: number;
  lat: number;
  address: string;
}

export interface Request {
  uid: string;
  shelter: string;
  address: string;
  content: string;
  status: 'pending' | 'completed';
}
