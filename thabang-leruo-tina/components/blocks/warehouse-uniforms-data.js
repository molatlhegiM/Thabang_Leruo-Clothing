// Warehouse Uniforms Data
export const warehouseUniformsFilters = [
  {
    id: "price",
    title: "Filter by price",
    options: [
      { id: "price-all", label: "All Price", count: 14, checked: true },
      { id: "price-1", label: "R0 - R400", count: 5 },
      { id: "price-2", label: "R400 - R600", count: 6 },
      { id: "price-3", label: "R600 - R900", count: 3 },
    ],
  },
  {
    id: "color",
    title: "Filter by color",
    options: [
      { id: "color-all", label: "All Color", count: 14, checked: true },
      { id: "color-1", label: "Orange", count: 5 },
      { id: "color-2", label: "Yellow", count: 4 },
      { id: "color-3", label: "Navy Blue", count: 3 },
      { id: "color-4", label: "Red", count: 2 },
    ],
  },
  {
    id: "size",
    title: "Filter by size",
    options: [
      { id: "size-all", label: "All Size", count: 14, checked: true },
      { id: "size-1", label: "Medium", count: 4 },
      { id: "size-2", label: "Large", count: 5 },
      { id: "size-3", label: "XL", count: 3 },
      { id: "size-4", label: "2XL", count: 2 },
    ],
  },
];

export const warehouseUniformsProducts = [
  {
    id: 1,
    name: "High-Visibility Vest",
    price: "R380.00",
    oldPrice: "",
    rating: 5,
    reviews: 134,
    img: "/img/images/Warehouse/warehouse-1.jpg",
    description: "Reflective safety vest for warehouse work",
  },
  {
    id: 2,
    name: "Warehouse Work Pants",
    price: "R520.00",
    oldPrice: "R580.00",
    rating: 4.5,
    reviews: 98,
    img: "/img/images/Warehouse/warehouse-2.jpg",
    description: "Durable pants with cargo pockets",
  },
  {
    id: 3,
    name: "Safety Jacket",
    price: "R680.00",
    oldPrice: "",
    rating: 5,
    reviews: 112,
    img: "/img/images/Warehouse/warehouse-3.jpg",
    description: "Insulated safety jacket with reflective strips",
  },
  {
    id: 4,
    name: "Work Shirt with Reflective Tape",
    price: "R420.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 87,
    img: "/img/images/Warehouse/warehouse-4.jpg",
    description: "Breathable work shirt with safety features",
  },
  {
    id: 5,
    name: "Cargo Shorts",
    price: "R380.00",
    oldPrice: "",
    rating: 4,
    reviews: 76,
    img: "/img/images/Warehouse/warehouse-5.jpg",
    description: "Heavy-duty cargo shorts for summer",
  },
  {
    id: 6,
    name: "Coveralls",
    price: "R750.00",
    oldPrice: "",
    rating: 5,
    reviews: 105,
    img: "/img/images/Warehouse/warehouse-6.jpg",
    description: "Full-body coveralls for warehouse protection",
  },
];

export const warehouseUniformsPageData = {
  totalPages: 2,
  current: 1,
  links: ["#page-1", "#page-2"],
};
