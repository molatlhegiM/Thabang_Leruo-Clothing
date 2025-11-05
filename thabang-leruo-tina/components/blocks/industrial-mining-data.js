// Industrial & Mining Data
export const industrialMiningFilters = [
  {
    id: "price",
    title: "Filter by price",
    options: [
      { id: "price-all", label: "All Price", count: 18, checked: true },
      { id: "price-1", label: "R0 - R500", count: 5 },
      { id: "price-2", label: "R500 - R800", count: 7 },
      { id: "price-3", label: "R800 - R1200", count: 6 },
    ],
  },
  {
    id: "color",
    title: "Filter by color",
    options: [
      { id: "color-all", label: "All Color", count: 18, checked: true },
      { id: "color-1", label: "Orange", count: 6 },
      { id: "color-2", label: "Yellow", count: 5 },
      { id: "color-3", label: "Navy Blue", count: 4 },
      { id: "color-4", label: "Khaki", count: 3 },
    ],
  },
  {
    id: "size",
    title: "Filter by size",
    options: [
      { id: "size-all", label: "All Size", count: 18, checked: true },
      { id: "size-1", label: "Medium", count: 4 },
      { id: "size-2", label: "Large", count: 6 },
      { id: "size-3", label: "XL", count: 5 },
      { id: "size-4", label: "2XL", count: 3 },
    ],
  },
];

export const industrialMiningProducts = [
  {
    id: 1,
    name: "Mining Coveralls High-Vis",
    price: "R980.00",
    oldPrice: "",
    rating: 5,
    reviews: 165,
    img: "/img/images/Industrial/industrial-1.jpg",
    description: "Heavy-duty mining coveralls with reflective tape",
  },
  {
    id: 2,
    name: "Industrial Work Jacket",
    price: "R750.00",
    oldPrice: "R820.00",
    rating: 5,
    reviews: 142,
    img: "/img/images/Industrial/industrial-2.jpg",
    description: "Flame-resistant industrial jacket",
  },
  {
    id: 3,
    name: "Safety Cargo Pants",
    price: "R580.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 118,
    img: "/img/images/Industrial/industrial-3.jpg",
    description: "Reinforced cargo pants for mining",
  },
  {
    id: 4,
    name: "Reflective Work Shirt",
    price: "R480.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 95,
    img: "/img/images/Industrial/industrial-4.jpg",
    description: "High-visibility work shirt",
  },
  {
    id: 5,
    name: "Industrial Bib Overalls",
    price: "R850.00",
    oldPrice: "",
    rating: 5,
    reviews: 128,
    img: "/img/images/Industrial/industrial-5.jpg",
    description: "Bib overalls with reinforced knees",
  },
  {
    id: 6,
    name: "Mining Safety Vest",
    price: "R420.00",
    oldPrice: "",
    rating: 4,
    reviews: 89,
    img: "/img/images/Industrial/industrial-6.jpg",
    description: "Multi-pocket safety vest with reflective strips",
  },
];

export const industrialMiningPageData = {
  totalPages: 3,
  current: 1,
  links: ["#page-1", "#page-2", "#page-3"],
};
