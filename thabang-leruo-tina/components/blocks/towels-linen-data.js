// Towels & Linen Data
export const towelsLinenFilters = [
  {
    id: "price",
    title: "Filter by price",
    options: [
      { id: "price-all", label: "All Price", count: 16, checked: true },
      { id: "price-1", label: "R0 - R200", count: 6 },
      { id: "price-2", label: "R200 - R400", count: 6 },
      { id: "price-3", label: "R400 - R600", count: 4 },
    ],
  },
  {
    id: "color",
    title: "Filter by color",
    options: [
      { id: "color-all", label: "All Color", count: 16, checked: true },
      { id: "color-1", label: "White", count: 7 },
      { id: "color-2", label: "Navy Blue", count: 4 },
      { id: "color-3", label: "Grey", count: 3 },
      { id: "color-4", label: "Beige", count: 2 },
    ],
  },
  {
    id: "type",
    title: "Filter by type",
    options: [
      { id: "type-all", label: "All Types", count: 16, checked: true },
      { id: "type-1", label: "Bath Towels", count: 6 },
      { id: "type-2", label: "Hand Towels", count: 4 },
      { id: "type-3", label: "Bed Linen", count: 4 },
      { id: "type-4", label: "Pillowcases", count: 2 },
    ],
  },
];

export const towelsLinenProducts = [
  {
    id: 1,
    name: "Premium Bath Towel Set",
    price: "R480.00",
    oldPrice: "",
    rating: 5,
    reviews: 156,
    img: "/img/images/Towels/towel-1.jpg",
    description: "Luxury Egyptian cotton bath towels",
  },
  {
    id: 2,
    name: "Hand Towel Pack",
    price: "R220.00",
    oldPrice: "R280.00",
    rating: 4.5,
    reviews: 98,
    img: "/img/images/Towels/towel-2.jpg",
    description: "Soft hand towels, set of 4",
  },
  {
    id: 3,
    name: "Bed Sheet Set",
    price: "R550.00",
    oldPrice: "",
    rating: 5,
    reviews: 124,
    img: "/img/images/Towels/towel-3.jpg",
    description: "Complete bed sheet set, all sizes",
  },
  {
    id: 4,
    name: "Face Towel Set",
    price: "R180.00",
    oldPrice: "",
    rating: 4,
    reviews: 82,
    img: "/img/images/Towels/towel-4.jpg",
    description: "Compact face towels, pack of 6",
  },
  {
    id: 5,
    name: "Duvet Cover Set",
    price: "R680.00",
    oldPrice: "",
    rating: 5,
    reviews: 112,
    img: "/img/images/Towels/towel-5.jpg",
    description: "Premium duvet cover with pillowcases",
  },
  {
    id: 6,
    name: "Beach Towel",
    price: "R350.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 89,
    img: "/img/images/Towels/towel-6.jpg",
    description: "Extra-large beach towel",
  },
];

export const towelsLinenPageData = {
  totalPages: 3,
  current: 1,
  links: ["#page-1", "#page-2", "#page-3"],
};
