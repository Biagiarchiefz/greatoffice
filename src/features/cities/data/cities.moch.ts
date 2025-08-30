import { City } from "../types/city.type"

const cityNames = [
  "Jakarta Pusat",
  "Jakarta Selatan",
  "Bandung",
  "Surabaya",
  "Yogyakarta",
  "Medan",
  "Semarang",
  "Makasar",
  "Bekasi",
  "Depok",
]


// kita membuat sebuah varibel cities yang berupah array dan elemen yang di dalam array tersebut berupa object yang typenya sama dengan City
// jadi cities berupa array of object
export const cities: City[] = cityNames.map( (name, i) => {
    // const officeCount = officeSpaces.filter( (space) => space.location === name ).length;

    return {
      id: i + 1,
      name,
      officeCount: 1,
      image: `/assets/images/thumbnails/thumbnails-${ (i % 3) + 1 }.png`,
      slug: name.toLocaleLowerCase().replace(/ /g, "-")   // Jakarta Pusat -> jakarta-pusat
    }
}) 