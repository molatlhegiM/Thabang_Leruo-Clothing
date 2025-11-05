import type { Template } from 'tinacms';

// Schema for Categories Section
export const categoriesSectionSchema: Template = {
  name: 'categoriesSection',
  label: 'Categories Section',
  ui: {
    defaultItem: {
      title: 'Shop by Category',
      subtitle: 'Browse our complete range of uniforms and clothing',
    },
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Section Title',
    },
    {
      type: 'string',
      name: 'subtitle',
      label: 'Section Subtitle',
    },
    {
      type: 'object',
      name: 'categories',
      label: 'Categories',
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.name }),
      },
      fields: [
        {
          type: 'string',
          name: 'name',
          label: 'Category Name',
        },
        {
          type: 'string',
          name: 'description',
          label: 'Description',
        },
        {
          type: 'image',
          name: 'image',
          label: 'Category Image',
        },
        {
          type: 'string',
          name: 'link',
          label: 'Link URL',
        },
        {
          type: 'number',
          name: 'productCount',
          label: 'Product Count',
        },
      ],
    },
  ],
};

// Schema for Featured Products Section
export const featuredProductsSectionSchema: Template = {
  name: 'featuredProductsSection',
  label: 'Featured Products Section',
  ui: {
    defaultItem: {
      title: 'Featured Products',
      subtitle: 'Check out our most popular items',
    },
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Section Title',
    },
    {
      type: 'string',
      name: 'subtitle',
      label: 'Section Subtitle',
    },
    {
      type: 'object',
      name: 'products',
      label: 'Products',
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.name }),
      },
      fields: [
        {
          type: 'string',
          name: 'name',
          label: 'Product Name',
        },
        {
          type: 'string',
          name: 'price',
          label: 'Price',
        },
        {
          type: 'string',
          name: 'oldPrice',
          label: 'Old Price (optional)',
        },
        {
          type: 'number',
          name: 'rating',
          label: 'Rating (1-5)',
        },
        {
          type: 'number',
          name: 'reviews',
          label: 'Number of Reviews',
        },
        {
          type: 'image',
          name: 'img',
          label: 'Product Image',
        },
        {
          type: 'string',
          name: 'category',
          label: 'Category',
        },
        {
          type: 'string',
          name: 'badge',
          label: 'Badge (New, Sale, Hot, Popular)',
        },
      ],
    },
  ],
};

// Schema for Recent Products Section
export const recentProductsSectionSchema: Template = {
  name: 'recentProductsSection',
  label: 'Recent Products Section',
  ui: {
    defaultItem: {
      title: 'Recent Products',
      subtitle: 'Check out our latest arrivals',
    },
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Section Title',
    },
    {
      type: 'string',
      name: 'subtitle',
      label: 'Section Subtitle',
    },
    {
      type: 'object',
      name: 'products',
      label: 'Products',
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.name }),
      },
      fields: [
        {
          type: 'string',
          name: 'name',
          label: 'Product Name',
        },
        {
          type: 'string',
          name: 'price',
          label: 'Price',
        },
        {
          type: 'string',
          name: 'oldPrice',
          label: 'Old Price (optional)',
        },
        {
          type: 'number',
          name: 'rating',
          label: 'Rating (1-5)',
        },
        {
          type: 'number',
          name: 'reviews',
          label: 'Number of Reviews',
        },
        {
          type: 'image',
          name: 'img',
          label: 'Product Image',
        },
        {
          type: 'string',
          name: 'category',
          label: 'Category',
        },
      ],
    },
  ],
};

// Generic Shop Page Schema (for product category pages)
export const shopPageSchema: Template = {
  name: 'shopPage',
  label: 'Shop Page',
  ui: {
    defaultItem: {
      title: 'Shop',
    },
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Page Title',
    },
    {
      type: 'string',
      name: 'breadcrumb',
      label: 'Breadcrumb Text',
    },
    {
      type: 'object',
      name: 'filters',
      label: 'Filters',
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.title }),
      },
      fields: [
        {
          type: 'string',
          name: 'id',
          label: 'Filter ID',
        },
        {
          type: 'string',
          name: 'title',
          label: 'Filter Title',
        },
        {
          type: 'object',
          name: 'options',
          label: 'Filter Options',
          list: true,
          fields: [
            {
              type: 'string',
              name: 'id',
              label: 'Option ID',
            },
            {
              type: 'string',
              name: 'label',
              label: 'Option Label',
            },
            {
              type: 'number',
              name: 'count',
              label: 'Product Count',
            },
            {
              type: 'boolean',
              name: 'checked',
              label: 'Default Checked',
            },
          ],
        },
      ],
    },
    {
      type: 'object',
      name: 'products',
      label: 'Products',
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.name }),
      },
      fields: [
        {
          type: 'string',
          name: 'name',
          label: 'Product Name',
        },
        {
          type: 'string',
          name: 'price',
          label: 'Price',
        },
        {
          type: 'string',
          name: 'oldPrice',
          label: 'Old Price (optional)',
        },
        {
          type: 'number',
          name: 'rating',
          label: 'Rating (1-5)',
        },
        {
          type: 'number',
          name: 'reviews',
          label: 'Number of Reviews',
        },
        {
          type: 'image',
          name: 'img',
          label: 'Product Image',
        },
        {
          type: 'string',
          name: 'description',
          label: 'Description',
          ui: {
            component: 'textarea',
          },
        },
      ],
    },
  ],
};
