'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { Section, sectionBlockSchemaField } from '../layout/section';
import { AnimatedGroup } from '../motion-primitives/animated-group';
import type { Transition } from 'framer-motion';

const transitionVariants = {
  container: {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', bounce: 0.3, duration: 0.8 } as Transition,
    },
  },
};

export default function CategoriesSection({ data }: { data: any }) {
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

        {/* Categories Grid */}
        <AnimatedGroup
          variants={transitionVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.categories?.map((category: any, index: number) => (
            <div
              key={index}
              data-tina-field={tinaField(category)}
              className="bg-background rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <Link href={category?.link || '#'} className="block">
                {/* Category Image */}
                {category?.image && (
                  <div className="relative h-64 overflow-hidden" data-tina-field={tinaField(category, 'image')}>
                    <Image
                      src={category.image}
                      alt={category.name || 'Category'}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Category Content */}
                <div className="p-6">
                  {category?.name && (
                    <h3
                      data-tina-field={tinaField(category, 'name')}
                      className="text-2xl font-semibold mb-2"
                    >
                      {category.name}
                    </h3>
                  )}
                  {category?.description && (
                    <p
                      data-tina-field={tinaField(category, 'description')}
                      className="text-muted-foreground mb-4"
                    >
                      {category.description}
                    </p>
                  )}
                  <span className="text-primary font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Shop Now
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </Section>
  );
}

export const categoriesSectionSchema: Template = {
  name: 'categoriesSection',
  label: 'Categories Section',
  ui: {
    previewSrc: '/blocks/categories.png',
    defaultItem: {
      title: 'Shop By Category',
      subtitle: 'Browse our diverse collection of quality uniforms and workwear',
      categories: [
        {
          name: 'School Uniforms',
          description: 'Quality uniforms for all school levels',
          image: '/images/categories/school.jpg',
          link: '/pre-school',
        },
      ],
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    { type: 'string', label: 'Title', name: 'title' },
    { type: 'string', label: 'Subtitle', name: 'subtitle', ui: { component: 'textarea' } },
    {
      label: 'Categories',
      name: 'categories',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.name || 'Category' }),
      },
      fields: [
        { label: 'Name', name: 'name', type: 'string' },
        { label: 'Description', name: 'description', type: 'string', ui: { component: 'textarea' } },
        { label: 'Image', name: 'image', type: 'image' },
        { label: 'Link', name: 'link', type: 'string' },
      ],
    },
  ],
};
