import { OfficeSpace } from "../types/officeSpace.type";

export const officeSpaces: OfficeSpace[] = [
  {
    id: 1,
    title: "Biagi Park Center Master Silicon Valley Start Class",
    slug: "biagi-park-center-master-silicon-valley-start-class",
    price: 18770000,
    duration: '20 days',
    location: 'Jakarta Pusat',  
    rating: 4.5,
    address: "Dekat Gedung Sate Banding",
    image: '/assets/images/thumbnails/thumbnail-details-2.png',
    images: [
      '/assets/images/thumbnails/thumbnail-details-2.png',
      '/assets/images/thumbnails/thumbnail-details-3.png'
    ],
    tags: ['Popular'],
    about: 'Whether you need queit private space away from distraction or collaborate in person...',
    features: ["Global Event", "Privacy", "Free Move", "Sustainbility", "extra Snacks", "Compact"],
    isFullyBooked: false,
    salesContacts: [
      {
        name: "Masayoshi",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-1.png"
      },
      {
        name: "Fuji Ovina",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-2.png"
      }
    ]
  }, 
    {
    id: 2,
    title: "Podok Pekerja Remote Surabaya",
    slug: "pondok-pekerja-remote-surabaya",
    price: 750000,
    duration: '15 days',
    location: 'Surabaya',  
    rating: 4.8,
    address: "Dekat Gedung Sate Banding",
    image: '/assets/images/thumbnails/thumbnail-details-3.png',
    images: [
      '/assets/images/thumbnails/thumbnail-details-2.png',
      '/assets/images/thumbnails/thumbnail-details-3.png'
    ],
    tags: ['Popular', 'Chipper'],
    about: 'Whether you need queit private space away from distraction or collaborate in person...',
    features: ["Global Event", "Privacy", "Free Move", "Sustainbility"],
    isFullyBooked: false,
    salesContacts: [
      {
        name: "Badrul",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-1.png"
      },
      {
        name: "Mei Mei",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-2.png"
      }
    ]
  }, 




]