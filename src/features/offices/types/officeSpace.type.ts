export type OfficeSpace = {
  id: number;
  title: string;
  slug: string;
  price: number;
  duration: string;
  address: string;
  about: string;
  location: string;
  rating: number;
  tags: string[];
  image: string;
  images: string[];
  features: string[];
  salesContacts: SalesContact[]; // array of SalesContact  // SalesContact menggunakna kurang siku artinya berarti nnti datanya banyak, dan kalau tidak menggunakan kurung sikut berrti SalesContactnya cuma 1
  isFullyBooked: boolean;
}

export type SalesContact = {
  name: string;
  role: string;
  photo: string;
}