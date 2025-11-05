// High School Data
export const highSchoolFilters = [
  {
    id: "price",
    title: "Filter by price",
    options: [
      { id: "price-all", label: "All Price", count: 18, checked: true },
      { id: "price-1", label: "R0 - R400", count: 4 },
      { id: "price-2", label: "R400 - R600", count: 8 },
      { id: "price-3", label: "R600 - R800", count: 6 },
    ],
  },
  {
    id: "color",
    title: "Filter by color",
    options: [
      { id: "color-all", label: "All Color", count: 18, checked: true },
      { id: "color-1", label: "Black", count: 7 },
      { id: "color-2", label: "Navy Blue", count: 6 },
      { id: "color-3", label: "Grey", count: 3 },
      { id: "color-4", label: "White", count: 2 },
    ],
  },
  {
    id: "size",
    title: "Filter by size",
    options: [
      { id: "size-all", label: "All Size", count: 18, checked: true },
      { id: "size-1", label: "Size 32", count: 4 },
      { id: "size-2", label: "Size 34", count: 5 },
      { id: "size-3", label: "Size 36", count: 5 },
      { id: "size-4", label: "Size 38", count: 4 },
    ],
  },
];

export const highSchoolProducts = [
  {
    id: 1,
    name: "High School Formal Blazer",
    price: "R750.00",
    oldPrice: "",
    rating: 5,
    reviews: 145,
    img: "/img/images/High School/high-1.jpg",
    description: "Premium formal blazer with school crest",
  },
  {
    id: 2,
    name: "School Tracksuit Set",
    price: "R620.00",
    oldPrice: "R680.00",
    rating: 4.5,
    reviews: 98,
    img: "/img/images/High School/high-2.jpg",
    description: "Complete tracksuit set for sports activities",
  },
  {
    id: 3,
    name: "Grey School Trousers",
    price: "R450.00",
    oldPrice: "",
    rating: 5,
    reviews: 112,
    img: "/img/images/High School/high-3.jpg",
    description: "Durable grey school trousers",
  },
  {
    id: 4,
    name: "School Polo Shirt",
    price: "R320.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 87,
    img: "/img/images/High School/high-4.jpg",
    description: "Comfortable polo shirt with school logo",
  },
  {
    id: 5,
    name: "School Skirt",
    price: "R380.00",
    oldPrice: "",
    rating: 4,
    reviews: 75,
    img: "/img/images/High School/high-5.jpg",
    description: "Pleated school skirt, various lengths",
  },
  {
    id: 6,
    name: "Winter School Jersey",
    price: "R480.00",
    oldPrice: "R520.00",
    rating: 5,
    reviews: 103,
    img: "/img/images/High School/high-6.jpg",
    description: "Warm winter jersey with school colors",
  },
];

export const highSchoolPageData = {
  totalPages: 3,
  current: 1,
  links: ["#page-1", "#page-2", "#page-3"],
};
