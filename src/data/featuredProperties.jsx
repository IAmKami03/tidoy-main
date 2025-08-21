import bed from "../assets/Images/bed.png";
import bath from "../assets/Images/bath.png";
import sizeIcon from "../assets/Images/size-house.png";
import heartPlain from "../assets/Images/heart-plain.png";
import heart from "../assets/Images/heart.png";
import halfStar from "../assets/Images/V (1).png";

import family from "../assets/Images/ForS.png";
import lembang from "../assets/Images/lebang-house.png";
import setiabudi from "../assets/Images/setiabudi.png";
import cikole from "../assets/Images/cikole-resort.png";

export const featuredProperties = [
  {
    id: 1,
    image: family,
    title: "Villa Family Resort Dago Pakar",
    location: "Dago Pakar, Bandung",
    rating: 4.8,
    reviews: 21,
    rooms: 4,
    baths: 2,
    size: "42.0 m2",
    price: 152,
    favoriteIcon: heart,
    bedIcon: bed,
    bathIcon: bath,
    sizeIcon: sizeIcon,
    ratingIcon: halfStar,
    category: "Apartment",
    coords: [6.4281, 3.4216], // Victoria Island
  },
  {
    id: 2,
    image: lembang,
    title: "Lembang House",
    location: "Lembang, Bandung",
    rating: 4.8,
    reviews: 21,
    rooms: 4,
    baths: 2,
    size: "42.0 m2",
    price: 152,
    favoriteIcon: heart,
    bedIcon: bed,
    bathIcon: bath,
    sizeIcon: sizeIcon,
    ratingIcon: halfStar,
    category: "House",
    coords: [6.4363, 3.4832], // Lekki Phase 1
  },
  {
    id: 3,
    image: setiabudi,
    title: "Setiabudi Villa Family",
    location: "Setiabudi, Bandung",
    rating: 4.8,
    reviews: 21,
    rooms: 4,
    baths: 2,
    size: "42.0 m2",
    price: 200,
    favoriteIcon: heartPlain,
    bedIcon: bed,
    bathIcon: bath,
    sizeIcon: sizeIcon,
    ratingIcon: halfStar,
    category: "Villa",
    coords: [6.4541, 3.4394], // Ikoyi
  },
  {
    id: 4,
    image: cikole,
    title: "Cikole Jayagiri Resort",
    location: "Lembang, Bandung",
    rating: 4.8,
    reviews: 21,
    rooms: 4,
    baths: 2,
    size: "42.0 m2",
    price: 200,
    favoriteIcon: heartPlain,
    bedIcon: bed,
    bathIcon: bath,
    sizeIcon: sizeIcon,
    ratingIcon: halfStar,
    category: "Hotel",
    coords: [6.5794, 3.3496], // Ikeja GRA
  },
];
