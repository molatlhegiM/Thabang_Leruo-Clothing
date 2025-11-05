// Chef & Kitchen Uniforms Data
export const chefKitchenUniformsFilters = [
  {
    id: "price",
    title: "Filter by price",
    options: [
      { id: "price-all", label: "All Price", count: 12, checked: true },
      { id: "price-1", label: "R0 - R350", count: 4 },
      { id: "price-2", label: "R350 - R550", count: 5 },
      { id: "price-3", label: "R550 - R800", count: 3 },
    ],
  },
  {
    id: "color",
    title: "Filter by color",
    options: [
      { id: "color-all", label: "All Color", count: 12, checked: true },
      { id: "color-1", label: "White", count: 6 },
      { id: "color-2", label: "Black", count: 4 },
      { id: "color-3", label: "Grey", count: 2 },
    ],
  },
  {
    id: "size",
    title: "Filter by size",
    options: [
      { id: "size-all", label: "All Size", count: 12, checked: true },
      { id: "size-1", label: "Small", count: 2 },
      { id: "size-2", label: "Medium", count: 4 },
      { id: "size-3", label: "Large", count: 4 },
      { id: "size-4", label: "XL", count: 2 },
    ],
  },
];

export const chefKitchenUniformsProducts = [
  {
    id: 1,
    name: "Chef Jacket Double-Breasted",
    price: "R580.00",
    oldPrice: "",
    rating: 5,
    reviews: 145,
    img: "/img/images/Chef/chef-1.jpg",
    description: "Professional chef jacket with cloth buttons",
  },
  {
    id: 2,
    name: "Chef Pants Checkered",
    price: "R420.00",
    oldPrice: "R480.00",
    rating: 5,
    reviews: 128,
    img: "/img/images/Chef/chef-2.jpg",
    description: "Traditional checkered chef pants",
  },
  {
    id: 3,
    name: "Chef Apron",
    price: "R280.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 96,
    img: "/img/images/Chef/chef-3.jpg",
    description: "Durable kitchen apron with pockets",
  },
  {
    id: 4,
    name: "Chef Hat",
    price: "R180.00",
    oldPrice: "",
    rating: 4,
    reviews: 82,
    img: "/img/images/Chef/chef-4.jpg",
    description: "Classic chef hat, adjustable fit",
  },
  {
    id: 5,
    name: "Kitchen Shirt",
    price: "R350.00",
    oldPrice: "",
    rating: 4.5,
    reviews: 89,
    img: "/img/images/Chef/chef-5.jpg",
    description: "Short-sleeve kitchen shirt",
  },
  {
    id: 6,
    name: "Bistro Apron",
    price: "R220.00",
    oldPrice: "",
    rating: 4,
    reviews: 74,
    img: "/img/images/Chef/chef-6.jpg",
    description: "Waist apron for servers and kitchen staff",
  },
];

export const chefKitchenUniformsPageData = {
  totalPages: 2,
  current: 1,
  links: ["#page-1", "#page-2"],
};
