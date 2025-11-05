// Medical Scrubs Data
export const medicalScrubsFilters = [
  {
    id: "price",
    title: "Filter by price",
    options: [
      { id: "price-all", label: "All Price", count: 15, checked: true },
      { id: "price-1", label: "R0 - R350", count: 5 },
      { id: "price-2", label: "R350 - R550", count: 6 },
      { id: "price-3", label: "R550 - R750", count: 4 },
    ],
  },
  {
    id: "color",
    title: "Filter by color",
    options: [
      { id: "color-all", label: "All Color", count: 15, checked: true },
      { id: "color-1", label: "Royal Blue", count: 5 },
      { id: "color-2", label: "Green", count: 4 },
      { id: "color-3", label: "Navy Blue", count: 3 },
      { id: "color-4", label: "Wine", count: 3 },
    ],
  },
  {
    id: "size",
    title: "Filter by size",
    options: [
      { id: "size-all", label: "All Size", count: 15, checked: true },
      { id: "size-1", label: "XS", count: 2 },
      { id: "size-2", label: "Small", count: 4 },
      { id: "size-3", label: "Medium", count: 4 },
      { id: "size-4", label: "Large", count: 3 },
      { id: "size-5", label: "XL", count: 2 },
    ],
  },
];

export const medicalScrubsProducts = [
  {
    id: 1,
    name: "Unisex Scrub Set V-Neck",
    price: "R580.00",
    oldPrice: "",
    rating: 5,
    reviews: 156,
    img: "/img/images/Medical/medical-1.jpg",
    description: "Professional scrub set with multiple pockets",
  },
  {
    id: 2,
    name: "Women's Scrub Top",
    price: "R320.00",
    oldPrice: "R380.00",
    rating: 5,
    reviews: 124,
    img: "/img/images/Medical/medical-2.jpg",
    description: "Comfortable women's scrub top with side vents",
  },
  {
    id: 3,
    name: "Men's Scrub Pants",
    price: "R380.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 98,
    img: "/img/images/Medical/medical-3.jpg",
    description: "Drawstring scrub pants with cargo pockets",
  },
  {
    id: 4,
    name: "Lab Coat Medical",
    price: "R520.00",
    oldPrice: "",
    rating: 5,
    reviews: 112,
    img: "/img/images/Medical/medical-4.jpg",
    description: "White lab coat for medical professionals",
  },
  {
    id: 5,
    name: "Scrub Jacket",
    price: "R480.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 89,
    img: "/img/images/Medical/medical-5.jpg",
    description: "Warm-up scrub jacket with zip closure",
  },
  {
    id: 6,
    name: "Printed Scrub Top",
    price: "R350.00",
    oldPrice: "",
    rating: 4,
    reviews: 76,
    img: "/img/images/Medical/medical-6.jpg",
    description: "Fun printed scrub top for pediatrics",
  },
];

export const medicalScrubsPageData = {
  totalPages: 3,
  current: 1,
  links: ["#page-1", "#page-2", "#page-3"],
};
