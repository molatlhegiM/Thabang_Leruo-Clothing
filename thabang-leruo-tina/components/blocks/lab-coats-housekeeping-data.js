// Lab Coats & Housekeeping Data
export const labCoatsHousekeepingFilters = [
  {
    id: "price",
    title: "Filter by price",
    options: [
      { id: "price-all", label: "All Price", count: 14, checked: true },
      { id: "price-1", label: "R0 - R350", count: 5 },
      { id: "price-2", label: "R350 - R550", count: 6 },
      { id: "price-3", label: "R550 - R800", count: 3 },
    ],
  },
  {
    id: "color",
    title: "Filter by color",
    options: [
      { id: "color-all", label: "All Color", count: 14, checked: true },
      { id: "color-1", label: "White", count: 8 },
      { id: "color-2", label: "Navy Blue", count: 3 },
      { id: "color-3", label: "Green", count: 2 },
      { id: "color-4", label: "Grey", count: 1 },
    ],
  },
  {
    id: "size",
    title: "Filter by size",
    options: [
      { id: "size-all", label: "All Size", count: 14, checked: true },
      { id: "size-1", label: "Small", count: 3 },
      { id: "size-2", label: "Medium", count: 4 },
      { id: "size-3", label: "Large", count: 4 },
      { id: "size-4", label: "XL", count: 3 },
    ],
  },
];

export const labCoatsHousekeepingProducts = [
  {
    id: 1,
    name: "Professional Lab Coat",
    price: "R520.00",
    oldPrice: "",
    rating: 5,
    reviews: 132,
    img: "/img/images/Lab Coats/lab-1.jpg",
    description: "White lab coat with multiple pockets",
  },
  {
    id: 2,
    name: "Housekeeping Uniform",
    price: "R420.00",
    oldPrice: "R480.00",
    rating: 4.5,
    reviews: 98,
    img: "/img/images/Lab Coats/lab-2.jpg",
    description: "Complete housekeeping uniform set",
  },
  {
    id: 3,
    name: "Lab Jacket Short Sleeve",
    price: "R380.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 85,
    img: "/img/images/Lab Coats/lab-3.jpg",
    description: "Short-sleeve lab jacket for comfort",
  },
  {
    id: 4,
    name: "Cleaning Staff Uniform",
    price: "R350.00",
    oldPrice: "",
    rating: 4,
    reviews: 76,
    img: "/img/images/Lab Coats/lab-4.jpg",
    description: "Durable cleaning staff uniform",
  },
  {
    id: 5,
    name: "Lab Coat with Buttons",
    price: "R480.00",
    oldPrice: "",
    rating: 5,
    reviews: 104,
    img: "/img/images/Lab Coats/lab-5.jpg",
    description: "Traditional button-front lab coat",
  },
  {
    id: 6,
    name: "Housekeeping Apron",
    price: "R280.00",
    oldPrice: "",
    rating: 4,
    reviews: 72,
    img: "/img/images/Lab Coats/lab-6.jpg",
    description: "Professional housekeeping apron",
  },
];

export const labCoatsHousekeepingPageData = {
  totalPages: 2,
  current: 1,
  links: ["#page-1", "#page-2"],
};
