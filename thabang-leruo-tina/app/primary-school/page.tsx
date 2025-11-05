import React from 'react';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout/layout';
import { Section } from '@/components/layout/section';
import ClientPage from '../[...urlSegments]/client-page';

export const metadata = {
  title: 'Primary School Uniforms | Thabang Leruo Clothing',
  description: 'Shop our collection of primary school uniforms including shirts, pants, and PE kits',
};

export const revalidate = 300;

export default async function PrimarySchoolShopPage() {
  const data = await client.queries.page({
    relativePath: 'primary-school.mdx',
  });

  return (
    <Layout rawPageData={data}>
      <Section>
        <ClientPage {...data} />
      </Section>
    </Layout>
  );
}
