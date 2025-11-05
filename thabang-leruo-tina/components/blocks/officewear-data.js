// Officewear Data
export const officewearFilters = [
  {
    id: "price",
    title: "Filter by price",
    options: [
      { id: "price-all", label: "All Price", count: 16, checked: true },
      { id: "price-1", label: "R0 - R500", count: 4 },
      { id: "price-2", label: "R500 - R800", count: 7 },
      { id: "price-3", label: "R800 - R1200", count: 5 },
    ],
  },
  {
    id: "color",
    title: "Filter by color",
    options: [
      { id: "color-all", label: "All Color", count: 16, checked: true },
      { id: "color-1", label: "Black", count: 6 },
      { id: "color-2", label: "Navy Blue", count: 5 },
      { id: "color-3", label: "White", count: 3 },
      { id: "color-4", label: "Grey", count: 2 },
    ],
  },
  {
    id: "size",
    title: "Filter by size",
    options: [
      { id: "size-all", label: "All Size", count: 16, checked: true },
      { id: "size-1", label: "Small", count: 3 },
      { id: "size-2", label: "Medium", count: 5 },
      { id: "size-3", label: "Large", count: 5 },
      { id: "size-4", label: "XL", count: 3 },
    ],
  },
];

export const officewearProducts = [
  {
    id: 1,
    name: "Executive Suit Blazer",
    price: "R1050.00",
    oldPrice: "",
    rating: 5,
    reviews: 142,
    img: "/img/images/Officewear/office-1.jpg",
    description: "Premium executive blazer for professional look",
  },
  {
    id: 2,
    name: "Formal Dress Pants",
    price: "R680.00",
    oldPrice: "R750.00",
    rating: 5,
    reviews: 118,
    img: "/img/images/Officewear/office-2.jpg",
    description: "Classic formal pants with perfect fit",
  },
  {
    id: 3,
    name: "Business Shirt",
    price: "R450.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 95,
    img: "/img/images/Officewear/office-3.jpg",
    description: "Crisp business shirt, wrinkle-resistant",
  },
  {
    id: 4,
    name: "Office Dress",
    price: "R780.00",
    oldPrice: "",
    rating: 5,
    reviews: 107,
    img: "/img/images/Officewear/office-4.jpg",
    description: "Elegant office dress for professional women",
  },
  {
    id: 5,
    name: "Pencil Skirt",
    price: "R520.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 88,
    img: "/img/images/Officewear/office-5.jpg",
    description: "Classic pencil skirt for office wear",
  },
  {
    id: 6,
    name: "Business Vest",
    price: "R580.00",
    oldPrice: "",
    rating: 4,
    reviews: 72,
    img: "/img/images/Officewear/office-6.jpg",
    description: "Stylish business vest for layered look",
  },
];

export const officewearPageData = {
  totalPages: 3,
  current: 1,
  links: ["#page-1", "#page-2", "#page-3"],
};
