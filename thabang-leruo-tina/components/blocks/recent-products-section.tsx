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
        staggerChildren: 0.06,
        delayChildren: 0.15,
      },
    },
  },
  item: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', bounce: 0.3, duration: 0.7 } as Transition,
    },
  },
};

export default function RecentProductsSection({ data }: { data: any }) {
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

        {/* Products List */}
        <AnimatedGroup
          variants={transitionVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {data.products?.map((product: any, index: number) => (
            <Link
              key={index}
              href={product?.link || '#'}
              data-tina-field={tinaField(product)}
              className="bg-background rounded-lg border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col sm:flex-row"
            >
              {/* Product Image */}
              {product?.image && (
                <div className="relative w-full sm:w-48 h-48 flex-shrink-0 overflow-hidden bg-muted" data-tina-field={tinaField(product, 'image')}>
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold z-10">
                      NEW
                    </span>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name || 'Product'}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Product Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {product?.name && (
                    <h3
                      data-tina-field={tinaField(product, 'name')}
                      className="text-xl font-semibold mb-2"
                    >
                      {product.name}
                    </h3>
                  )}
                  {product?.description && (
                    <p
                      data-tina-field={tinaField(product, 'description')}
                      className="text-muted-foreground mb-4 line-clamp-3"
                    >
                      {product.description}
                    </p>
                  )}
                </div>

                {/* Price and Date */}
                <div className="flex items-center justify-between mt-4">
                  {product?.price && (
                    <span data-tina-field={tinaField(product, 'price')} className="text-xl font-bold text-primary">
                      {product.price}
                    </span>
                  )}
                  {product?.date && (
                    <span data-tina-field={tinaField(product, 'date')} className="text-sm text-muted-foreground">
                      Added {product.date}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </AnimatedGroup>

        {/* View All Button */}
        {data.viewAllLink && (
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href={data.viewAllLink}>
                View All Recent Products
              </Link>
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}

export const recentProductsSectionSchema: Template = {
  name: 'recentProductsSection',
  label: 'Recent Products Section',
  ui: {
    previewSrc: '/blocks/recent-products.png',
    defaultItem: {
      title: 'Recently Added',
      subtitle: 'Check out our latest arrivals',
      products: [
        {
          name: 'New Work Jacket',
          description: 'Just arrived - premium quality work jacket',
          image: '/images/products/jacket.jpg',
          price: 'R599',
          date: '2 days ago',
          isNew: true,
          link: '/products/work-jacket',
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
        { label: 'Date Added', name: 'date', type: 'string', description: 'e.g., "2 days ago"' },
        { label: 'Mark as New', name: 'isNew', type: 'boolean' },
        { label: 'Link', name: 'link', type: 'string' },
      ],
    },
    { label: 'View All Link', name: 'viewAllLink', type: 'string', description: 'Link to show all recent products' },
  ],
};
