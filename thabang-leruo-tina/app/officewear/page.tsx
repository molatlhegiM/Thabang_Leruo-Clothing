import React from 'react';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout/layout';
import ClientPage from '../[...urlSegments]/client-page';

export const metadata = {
  title: 'Professional Officewear | Thabang Leruo Clothing',
  description: 'Shop our collection of smart officewear including suits, shirts, and professional attire',
};

export const revalidate = 300;

export default async function OfficewearShopPage() {
  const data = await client.queries.page({
    relativePath: 'officewear.mdx',
  });

  return (
    <Layout rawPageData={data}>
      <ClientPage {...data} />
    </Layout>
  );
}
