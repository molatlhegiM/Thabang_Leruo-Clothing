// Work Overalls Data
export const workOverallsFilters = [
  {
    id: "price",
    title: "Filter by price",
    options: [
      { id: "price-all", label: "All Price", count: 16, checked: true },
      { id: "price-1", label: "R0 - R400", count: 4 },
      { id: "price-2", label: "R400 - R700", count: 7 },
      { id: "price-3", label: "R700 - R1000", count: 5 },
    ],
  },
  {
    id: "color",
    title: "Filter by color",
    options: [
      { id: "color-all", label: "All Color", count: 16, checked: true },
      { id: "color-1", label: "Navy Blue", count: 6 },
      { id: "color-2", label: "Khaki", count: 5 },
      { id: "color-3", label: "Grey", count: 3 },
      { id: "color-4", label: "Black", count: 2 },
    ],
  },
  {
    id: "size",
    title: "Filter by size",
    options: [
      { id: "size-all", label: "All Size", count: 16, checked: true },
      { id: "size-1", label: "Medium", count: 4 },
      { id: "size-2", label: "Large", count: 5 },
      { id: "size-3", label: "XL", count: 4 },
      { id: "size-4", label: "2XL", count: 3 },
    ],
  },
];

export const workOverallsProducts = [
  {
    id: 1,
    name: "Heavy-Duty Bib Overalls",
    price: "R720.00",
    oldPrice: "",
    rating: 5,
    reviews: 148,
    img: "/img/images/Overalls/overall-1.jpg",
    description: "Durable bib overalls with adjustable straps",
  },
  {
    id: 2,
    name: "Mechanic Coveralls",
    price: "R650.00",
    oldPrice: "R720.00",
    rating: 5,
    reviews: 132,
    img: "/img/images/Overalls/overall-2.jpg",
    description: "Full-zip mechanic coveralls with pockets",
  },
  {
    id: 3,
    name: "Insulated Overalls",
    price: "R850.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 96,
    img: "/img/images/Overalls/overall-3.jpg",
    description: "Winter insulated work overalls",
  },
  {
    id: 4,
    name: "Painters Overalls",
    price: "R480.00",
    oldPrice: "",
    rating: 4,
    reviews: 78,
    img: "/img/images/Overalls/overall-4.jpg",
    description: "Lightweight overalls for painters",
  },
  {
    id: 5,
    name: "Carpenter Bib Overalls",
    price: "R680.00",
    oldPrice: "",
    rating: 5,
    reviews: 112,
    img: "/img/images/Overalls/overall-5.jpg",
    description: "Carpenter overalls with tool loops",
  },
  {
    id: 6,
    name: "Safety Coveralls Reflective",
    price: "R780.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 104,
    img: "/img/images/Overalls/overall-6.jpg",
    description: "High-visibility safety coveralls",
  },
];

export const workOverallsPageData = {
  totalPages: 3,
  current: 1,
  links: ["#page-1", "#page-2", "#page-3"],
};
