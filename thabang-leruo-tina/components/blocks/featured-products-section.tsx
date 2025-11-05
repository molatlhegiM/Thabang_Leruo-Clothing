'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { Section, sectionBlockSchemaField } from '../layout/section';
import { AnimatedGroup } from '../motion-primitives/animated-group';
import { Button } from '../ui/button';
import type { Transition } from 'framer-motion';

const transitionVariants = {
  container: {
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', bounce: 0.3, duration: 0.6 } as Transition,
    },
  },
};

export default function FeaturedProductsSection({ data }: { data: any }) {
  return (
    <Section background={data.background}>
      <div className="container mx-auto px-4 py-16">
        {/* Section Header */}
        {data.title && (
          <div data-tina-field={tinaField(data, 'title')} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h2>
            {data.subtitle && (
              <p data-tina-field={tinaField(data, 'subtitle')} className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {data.subtitle}
              </p>
            )}
          </div>
        )}

        {/* Products Grid */}
        <AnimatedGroup
          variants={transitionVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {data.products?.map((product: any, index: number) => (
            <div
              key={index}
              data-tina-field={tinaField(product)}
              className="bg-background rounded-lg border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              {product?.image && (
                <div className="relative h-72 overflow-hidden bg-muted" data-tina-field={tinaField(product, 'image')}>
                  {product.badge && (
                    <span className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold z-10">
                      {product.badge}
                    </span>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name || 'Product'}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}

              {/* Product Details */}
              <div className="p-5">
                {product?.name && (
                  <h3
                    data-tina-field={tinaField(product, 'name')}
                    className="text-lg font-semibold mb-2 line-clamp-2"
                  >
                    {product.name}
                  </h3>
                )}
                {product?.description && (
                  <p
                    data-tina-field={tinaField(product, 'description')}
                    className="text-sm text-muted-foreground mb-4 line-clamp-2"
                  >
                    {product.description}
                  </p>
                )}

                {/* Price and Action */}
                <div className="flex items-center justify-between mt-4">
                  {product?.price && (
                    <span data-tina-field={tinaField(product, 'price')} className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                  )}
                  <Button asChild size="sm" variant="default">
                    <Link href={product?.link || '#'}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </AnimatedGroup>

        {/* View All Button */}
        {data.viewAllLink && (
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href={data.viewAllLink}>
                View All Products
              </Link>
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}

export const featuredProductsSectionSchema: Template = {
  name: 'featuredProductsSection',
  label: 'Featured Products Section',
  ui: {
    previewSrc: '/blocks/featured-products.png',
    defaultItem: {
      title: 'Featured Products',
      subtitle: 'Discover our hand-picked selection of premium workwear and uniforms',
      products: [
        {
          name: 'Premium Work Shirt',
          description: 'Durable and comfortable work shirt',
          image: '/images/products/shirt.jpg',
          price: 'R299',
          badge: 'Best Seller',
          link: '/products/work-shirt',
        },
      ],
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    { type: 'string', label: 'Title', name: 'title' },
    { type: 'string', label: 'Subtitle', name: 'subtitle', ui: { component: 'textarea' } },
    {
      label: 'Products',
      name: 'products',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.name || 'Product' }),
      },
      fields: [
        { label: 'Name', name: 'name', type: 'string' },
        { label: 'Description', name: 'description', type: 'string', ui: { component: 'textarea' } },
        { label: 'Image', name: 'image', type: 'image' },
        { label: 'Price', name: 'price', type: 'string' },
        { label: 'Badge', name: 'badge', type: 'string', description: 'Optional badge like "Sale" or "New"' },
        { label: 'Link', name: 'link', type: 'string' },
      ],
    },
    { label: 'View All Link', name: 'viewAllLink', type: 'string', description: 'Link to show all products page' },
  ],
};
