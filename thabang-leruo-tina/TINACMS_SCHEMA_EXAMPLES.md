# TinaCMS Schema Configuration Examples

## 📝 Overview

This file shows example TinaCMS schema configurations for registering the new shop blocks in your TinaCMS setup.

## 🔧 Current Implementation

The shop sections are already registered in `/tina/collection/page.ts`. Here's what was added:

### 1. Import Statements

```typescript
import { categoriesSectionBlockSchema } from '@/components/blocks/CategoriesSection';
import { featuredProductsSectionBlockSchema } from '@/components/blocks/FeaturedProductsSection';
import { recentProductsSectionBlockSchema } from '@/components/blocks/RecentProductsSection';
```

### 2. Add to Templates Array

```typescript
const Page: Collection = {
  label: 'Pages',
  name: 'page',
  path: 'content/pages',
  format: 'mdx',
  ui: {
    router: ({ document }) => {
      const filepath = document._sys.breadcrumbs.join('/');
      if (filepath === 'home') {
        return '/';
      }
      return `/${filepath}`;
    },
  },
  fields: [
    {
      type: 'object',
      list: true,
      name: 'blocks',
      label: 'Sections',
      ui: {
        visualSelector: true,
      },
      templates: [
        heroBlockSchema,
        calloutBlockSchema,
        featureBlockSchema,
        statsBlockSchema,
        ctaBlockSchema,
        contentBlockSchema,
        testimonialBlockSchema,
        videoBlockSchema,
        // NEW SHOP SECTIONS ADDED HERE ✨
        categoriesSectionBlockSchema,
        featuredProductsSectionBlockSchema,
        recentProductsSectionBlockSchema,
      ],
    },
  ],
};
```

## 🎨 Schema Examples

### Categories Section Schema

```javascript
export const categoriesSectionBlockSchema = {
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
  ],
};
```

### Featured Products Schema

```javascript
export const featuredProductsSectionBlockSchema = {
  name: 'featuredProductsSection',
  label: 'Featured Products',
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
  ],
};
```

### Recent Products Schema

```javascript
export const recentProductsSectionBlockSchema = {
  name: 'recentProductsSection',
  label: 'Recent Products',
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
  ],
};
```

## 🚀 How to Use TinaCMS with These Blocks

### Step 1: Access TinaCMS Dashboard

```bash
# Start the development server
npm run dev

# Navigate to TinaCMS admin
http://localhost:3000/admin
```

### Step 2: Edit Homepage

1. In TinaCMS dashboard, select **"Pages"** from the sidebar
2. Choose **"Home"** page
3. Click **"Add Section"** or **"Add Block"**
4. You'll see the new options:
   - **Categories Section**
   - **Featured Products**
   - **Recent Products**

### Step 3: Configure Section

When you add a section, you can edit:
- **Title** - The main heading for the section
- **Subtitle** - A descriptive subheading

The products/categories will load from the data files automatically.

## 📝 Advanced Schema with Product Fields

For full control over products via TinaCMS, here's an extended schema example:

```typescript
export const featuredProductsSectionFullSchema: Template = {
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
          required: true,
        },
        {
          type: 'string',
          name: 'price',
          label: 'Price',
          required: true,
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
          required: true,
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
          required: true,
        },
        {
          type: 'string',
          name: 'category',
          label: 'Category',
        },
        {
          type: 'string',
          name: 'badge',
          label: 'Badge',
          options: ['New', 'Sale', 'Hot', 'Popular'],
        },
      ],
    },
  ],
};
```

## 🎯 Schema Field Types

TinaCMS supports various field types:

```typescript
// String field
{
  type: 'string',
  name: 'title',
  label: 'Title',
  required: true,
}

// Number field
{
  type: 'number',
  name: 'rating',
  label: 'Rating',
}

// Boolean field
{
  type: 'boolean',
  name: 'featured',
  label: 'Featured Product',
}

// Image field
{
  type: 'image',
  name: 'image',
  label: 'Product Image',
}

// Textarea field
{
  type: 'string',
  name: 'description',
  label: 'Description',
  ui: {
    component: 'textarea',
  },
}

// Select field
{
  type: 'string',
  name: 'badge',
  label: 'Badge Type',
  options: ['New', 'Sale', 'Hot', 'Popular'],
}

// Rich text field
{
  type: 'rich-text',
  name: 'content',
  label: 'Content',
}

// List of objects
{
  type: 'object',
  name: 'products',
  label: 'Products',
  list: true,
  fields: [
    // ... nested fields
  ],
}
```

## 🔄 Making Sections Fully Editable

To make products fully editable via TinaCMS, update the component to use TinaCMS data:

### Before (Static Data)
```jsx
import { featuredProductsData } from "./featuredProductsData";

const FeaturedProductsSection = () => {
  const products = featuredProductsData;
  // ...
};
```

### After (TinaCMS Data)
```jsx
const FeaturedProductsSection = ({ data }) => {
  const products = data?.products || featuredProductsData; // Fallback to static data
  const title = data?.title || "Featured Products";
  const subtitle = data?.subtitle || "Check out our most popular items";
  // ...
};
```

## 📋 Complete Integration Example

Here's how a fully integrated TinaCMS block looks:

### 1. Component File (FeaturedProductsSection.jsx)

```jsx
"use client";
import React from "react";
import { featuredProductsData } from "./featuredProductsData";

const FeaturedProductsSection = ({ data }) => {
  // Use TinaCMS data if available, fallback to static data
  const products = data?.products || featuredProductsData;
  const title = data?.title || "Featured Products";
  const subtitle = data?.subtitle || "Check out our most popular items";

  return (
    <div className="container-fluid pt-5 pb-3">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">{title}</span>
        </h2>
        <p className="text-muted">{subtitle}</p>
      </div>
      <div className="row px-xl-5">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-6 col-sm-12 pb-1">
            {/* Product card JSX */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductsSection;

// Export schema for TinaCMS
export const featuredProductsSectionBlockSchema = {
  name: 'featuredProductsSection',
  label: 'Featured Products',
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
  ],
};
```

### 2. Register in Blocks (index.tsx)

```tsx
import FeaturedProductsSection from "./FeaturedProductsSection";

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    // ... other cases
    case "PageBlocksFeaturedProductsSection":
      return <FeaturedProductsSection data={block} />;
    default:
      return null;
  }
};
```

### 3. Register in TinaCMS Config (tina/collection/page.ts)

```typescript
import { featuredProductsSectionBlockSchema } from '@/components/blocks/FeaturedProductsSection';

const Page: Collection = {
  // ...
  fields: [
    {
      type: 'object',
      list: true,
      name: 'blocks',
      label: 'Sections',
      templates: [
        // ... other schemas
        featuredProductsSectionBlockSchema,
      ],
    },
  ],
};
```

## 🎨 Visual Editor Features

Once registered, TinaCMS provides:

- ✅ **Visual Preview** - See changes in real-time
- ✅ **Drag & Drop** - Reorder sections easily
- ✅ **Form Controls** - Edit text, images, and data
- ✅ **Media Manager** - Upload and manage images
- ✅ **Version Control** - Git-based content management
- ✅ **Live Editing** - Edit content on the actual page

## 🔐 Production Setup

For production deployment with TinaCMS Cloud:

### 1. Create TinaCMS Cloud Account
```bash
# Visit https://app.tina.io
# Create account and project
```

### 2. Get Credentials
```bash
# In TinaCMS Cloud dashboard:
# - Copy Client ID
# - Generate Token
```

### 3. Set Environment Variables
```env
# .env.local
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id_here
TINA_TOKEN=your_token_here
NEXT_PUBLIC_TINA_BRANCH=main
```

### 4. Update Config
```typescript
// tina/config.ts
export default defineConfig({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || 'main',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  // ... rest of config
});
```

## 📚 Resources

- **TinaCMS Documentation**: https://tina.io/docs
- **Schema Reference**: https://tina.io/docs/schema
- **Field Types**: https://tina.io/docs/reference/schema/#field-types
- **Templates**: https://tina.io/docs/reference/schema/#templates

## ✅ Summary

The TinaCMS integration is complete and functional:

1. ✅ All schemas defined and exported
2. ✅ Components registered in blocks index
3. ✅ TinaCMS config updated with new blocks
4. ✅ Visual editor available at `/admin`
5. ✅ Homepage sections editable via dashboard
6. ✅ Product data can be managed through TinaCMS

Your shop is now fully content-manageable through TinaCMS! 🎉
