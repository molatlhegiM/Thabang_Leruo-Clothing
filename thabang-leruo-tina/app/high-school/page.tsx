import React from 'react';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout/layout';
import { Section } from '@/components/layout/section';
import ClientPage from '../[...urlSegments]/client-page';

export const metadata = {
  title: 'High School Uniforms | Thabang Leruo Clothing',
  description: 'Shop our collection of high school uniforms including blazers, formal wear, and sports kits',
};

export const revalidate = 300;

export default async function HighSchoolShopPage() {
  const data = await client.queries.page({
    relativePath: 'high-school.mdx',
  });

  return (
    <Layout rawPageData={data}>
      <Section>
        <ClientPage {...data} />
      </Section>
    </Layout>
  );
}
