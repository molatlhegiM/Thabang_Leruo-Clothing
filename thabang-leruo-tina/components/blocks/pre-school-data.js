// src/data/preSchoolData.js
export const preSchoolFilters = [
  {
    id: "price",
    title: "Filter by price",
    options: [
      { id: "price-all", label: "All Price", count: 12, checked: true },
      { id: "price-1", label: "R0 - R200", count: 3 },
      { id: "price-2", label: "R200 - R400", count: 4 },
      { id: "price-3", label: "R400 - R600", count: 5 },
    ],
  },
  {
    id: "color",
    title: "Filter by color",
    options: [
      { id: "color-all", label: "All Color", count: 12, checked: true },
      { id: "color-1", label: "Black", count: 4 },
      { id: "color-2", label: "White", count: 3 },
      { id: "color-3", label: "Navy Blue", count: 3 },
      { id: "color-4", label: "Red", count: 2 },
    ],
  },
  {
    id: "size",
    title: "Filter by size",
    options: [
      { id: "size-all", label: "All Size", count: 12, checked: true },
      { id: "size-1", label: "Size 2", count: 3 },
      { id: "size-2", label: "Size 4", count: 3 },
      { id: "size-3", label: "Size 6", count: 3 },
      { id: "size-4", label: "Size 8", count: 3 },
    ],
  },
];

export const preSchoolProducts = [
  {
    id: 1,
    name: "Winter Tracksuit Fleece Lining",
    price: "R500.00",
    oldPrice: "R550.00",
    rating: 5,
    reviews: 99,
    img: "/img/images/Pre School/pre school 1.jpg",
  },
  {
    id: 2,
    name: "Branded Full Summer Tracksuit",
    price: "R380.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 85,
    img: "/img/images/Pre School/pre school 2.jpg",
  },
  {
    id: 3,
    name: "Navy Blue School Uniform Set",
    price: "R420.00",
    oldPrice: "",
    rating: 5,
    reviews: 120,
    img: "/img/images/Pre School/pre school 1.jpg",
  },
  {
    id: 4,
    name: "Red Sports Tracksuit",
    price: "R350.00",
    oldPrice: "R400.00",
    rating: 4,
    reviews: 67,
    img: "/img/images/Pre School/pre school 2.jpg",
  },
  {
    id: 5,
    name: "Black Winter Jacket",
    price: "R480.00",
    oldPrice: "",
    rating: 5,
    reviews: 95,
    img: "/img/images/Pre School/pre school 1.jpg",
  },
  {
    id: 6,
    name: "White Summer Polo Set",
    price: "R320.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 78,
    img: "/img/images/Pre School/pre school 2.jpg",
  },
  {
    id: 7,
    name: "Navy Tracksuit with Logo",
    price: "R450.00",
    oldPrice: "",
    rating: 5,
    reviews: 102,
    img: "/img/images/Pre School/pre school 1.jpg",
  },
  {
    id: 8,
    name: "Fleece Winter Uniform",
    price: "R520.00",
    oldPrice: "R580.00",
    rating: 4.5,
    reviews: 88,
    img: "/img/images/Pre School/pre school 2.jpg",
  },
  {
    id: 9,
    name: "Summer Sports Set",
    price: "R340.00",
    oldPrice: "",
    rating: 4,
    reviews: 72,
    img: "/img/images/Pre School/pre school 1.jpg",
  },
];

export const preSchoolPageData = {
  totalPages: 2,
  current: 1,
  links: ["#page-1", "#page-2"],
};

