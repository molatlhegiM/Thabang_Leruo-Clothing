// Primary School Data
export const primarySchoolFilters = [
  {
    id: "price",
    title: "Filter by price",
    options: [
      { id: "price-all", label: "All Price", count: 15, checked: true },
      { id: "price-1", label: "R0 - R300", count: 5 },
      { id: "price-2", label: "R300 - R500", count: 6 },
      { id: "price-3", label: "R500 - R700", count: 4 },
    ],
  },
  {
    id: "color",
    title: "Filter by color",
    options: [
      { id: "color-all", label: "All Color", count: 15, checked: true },
      { id: "color-1", label: "Navy Blue", count: 6 },
      { id: "color-2", label: "Black", count: 4 },
      { id: "color-3", label: "White", count: 3 },
      { id: "color-4", label: "Burgundy", count: 2 },
    ],
  },
  {
    id: "size",
    title: "Filter by size",
    options: [
      { id: "size-all", label: "All Size", count: 15, checked: true },
      { id: "size-1", label: "Size 6", count: 3 },
      { id: "size-2", label: "Size 8", count: 4 },
      { id: "size-3", label: "Size 10", count: 4 },
      { id: "size-4", label: "Size 12", count: 4 },
    ],
  },
];

export const primarySchoolProducts = [
  {
    id: 1,
    name: "Primary School Winter Tracksuit",
    price: "R550.00",
    oldPrice: "R600.00",
    rating: 5,
    reviews: 120,
    img: "/img/images/Primary School/primary-1.jpg",
    description: "Premium quality winter tracksuit with fleece lining",
  },
  {
    id: 2,
    name: "Navy Blue School Blazer",
    price: "R680.00",
    oldPrice: "",
    rating: 5,
    reviews: 95,
    img: "/img/images/Primary School/primary-2.jpg",
    description: "Official school blazer with embroidered badge",
  },
  {
    id: 3,
    name: "Summer School Dress",
    price: "R420.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 88,
    img: "/img/images/Primary School/primary-3.jpg",
    description: "Comfortable summer dress with school colors",
  },
  {
    id: 4,
    name: "School Tracksuit Pants",
    price: "R320.00",
    oldPrice: "R380.00",
    rating: 4,
    reviews: 76,
    img: "/img/images/Primary School/primary-4.jpg",
    description: "Durable tracksuit pants for physical education",
  },
  {
    id: 5,
    name: "White School Shirt",
    price: "R280.00",
    oldPrice: "",
    rating: 5,
    reviews: 110,
    img: "/img/images/Primary School/primary-5.jpg",
    description: "Classic white school shirt, easy to maintain",
  },
  {
    id: 6,
    name: "School Shorts",
    price: "R250.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 82,
    img: "/img/images/Primary School/primary-6.jpg",
    description: "Comfortable school shorts for warm weather",
  },
];

export const primarySchoolPageData = {
  totalPages: 3,
  current: 1,
  links: ["#page-1", "#page-2", "#page-3"],
};
