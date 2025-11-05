// Dressing Gowns Data
export const dressingGownsFilters = [
  {
    id: "price",
    title: "Filter by price",
    options: [
      { id: "price-all", label: "All Price", count: 10, checked: true },
      { id: "price-1", label: "R0 - R300", count: 3 },
      { id: "price-2", label: "R300 - R500", count: 4 },
      { id: "price-3", label: "R500 - R700", count: 3 },
    ],
  },
  {
    id: "color",
    title: "Filter by color",
    options: [
      { id: "color-all", label: "All Color", count: 10, checked: true },
      { id: "color-1", label: "White", count: 4 },
      { id: "color-2", label: "Navy Blue", count: 3 },
      { id: "color-3", label: "Burgundy", count: 2 },
      { id: "color-4", label: "Grey", count: 1 },
    ],
  },
  {
    id: "size",
    title: "Filter by size",
    options: [
      { id: "size-all", label: "All Size", count: 10, checked: true },
      { id: "size-1", label: "Small", count: 2 },
      { id: "size-2", label: "Medium", count: 3 },
      { id: "size-3", label: "Large", count: 3 },
      { id: "size-4", label: "XL", count: 2 },
    ],
  },
];

export const dressingGownsProducts = [
  {
    id: 1,
    name: "Luxury Terry Dressing Gown",
    price: "R580.00",
    oldPrice: "",
    rating: 5,
    reviews: 118,
    img: "/img/images/Dressing Gowns/gown-1.jpg",
    description: "Plush terry cloth dressing gown",
  },
  {
    id: 2,
    name: "Waffle Weave Robe",
    price: "R420.00",
    oldPrice: "R480.00",
    rating: 5,
    reviews: 96,
    img: "/img/images/Dressing Gowns/gown-2.jpg",
    description: "Lightweight waffle weave bathrobe",
  },
  {
    id: 3,
    name: "Spa Robe",
    price: "R520.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 88,
    img: "/img/images/Dressing Gowns/gown-3.jpg",
    description: "Premium spa quality robe",
  },
  {
    id: 4,
    name: "Kimono Style Robe",
    price: "R380.00",
    oldPrice: "",
    rating: 4,
    reviews: 72,
    img: "/img/images/Dressing Gowns/gown-4.jpg",
    description: "Elegant kimono-style dressing gown",
  },
  {
    id: 5,
    name: "Hotel Quality Bathrobe",
    price: "R650.00",
    oldPrice: "",
    rating: 5,
    reviews: 105,
    img: "/img/images/Dressing Gowns/gown-5.jpg",
    description: "Five-star hotel quality bathrobe",
  },
  {
    id: 6,
    name: "Cotton Velour Robe",
    price: "R480.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 82,
    img: "/img/images/Dressing Gowns/gown-6.jpg",
    description: "Soft cotton velour dressing gown",
  },
];

export const dressingGownsPageData = {
  totalPages: 2,
  current: 1,
  links: ["#page-1", "#page-2"],
};
