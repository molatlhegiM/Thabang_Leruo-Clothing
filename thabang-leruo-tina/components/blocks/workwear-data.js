// Workwear Data
export const workwearFilters = [
  {
    id: "price",
    title: "Filter by price",
    options: [
      { id: "price-all", label: "All Price", count: 20, checked: true },
      { id: "price-1", label: "R0 - R300", count: 5 },
      { id: "price-2", label: "R300 - R500", count: 8 },
      { id: "price-3", label: "R500 - R800", count: 7 },
    ],
  },
  {
    id: "color",
    title: "Filter by color",
    options: [
      { id: "color-all", label: "All Color", count: 20, checked: true },
      { id: "color-1", label: "Navy Blue", count: 8 },
      { id: "color-2", label: "Black", count: 6 },
      { id: "color-3", label: "Grey", count: 4 },
      { id: "color-4", label: "Khaki", count: 2 },
    ],
  },
  {
    id: "size",
    title: "Filter by size",
    options: [
      { id: "size-all", label: "All Size", count: 20, checked: true },
      { id: "size-1", label: "Small", count: 4 },
      { id: "size-2", label: "Medium", count: 6 },
      { id: "size-3", label: "Large", count: 6 },
      { id: "size-4", label: "XL", count: 4 },
    ],
  },
];

export const workwearProducts = [
  {
    id: 1,
    name: "Professional Work Pants",
    price: "R480.00",
    oldPrice: "",
    rating: 5,
    reviews: 156,
    img: "/img/images/Workwear/work-1.jpg",
    description: "Durable work pants with reinforced knees",
  },
  {
    id: 2,
    name: "Safety Work Jacket",
    price: "R650.00",
    oldPrice: "R720.00",
    rating: 5,
    reviews: 132,
    img: "/img/images/Workwear/work-2.jpg",
    description: "High-visibility safety jacket with pockets",
  },
  {
    id: 3,
    name: "Work Shirt",
    price: "R320.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 98,
    img: "/img/images/Workwear/work-3.jpg",
    description: "Comfortable work shirt, easy care fabric",
  },
  {
    id: 4,
    name: "Work Overalls",
    price: "R580.00",
    oldPrice: "",
    rating: 5,
    reviews: 124,
    img: "/img/images/Workwear/work-4.jpg",
    description: "Heavy-duty work overalls with multiple pockets",
  },
  {
    id: 5,
    name: "Cargo Work Pants",
    price: "R520.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 89,
    img: "/img/images/Workwear/work-5.jpg",
    description: "Cargo pants with side pockets",
  },
  {
    id: 6,
    name: "Work Vest",
    price: "R380.00",
    oldPrice: "",
    rating: 4,
    reviews: 76,
    img: "/img/images/Workwear/work-6.jpg",
    description: "Multi-pocket work vest",
  },
];

export const workwearPageData = {
  totalPages: 4,
  current: 1,
  links: ["#page-1", "#page-2", "#page-3", "#page-4"],
};
