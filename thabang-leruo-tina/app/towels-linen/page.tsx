import React from 'react';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout/layout';
import ClientPage from '../[...urlSegments]/client-page';

export const metadata = {
  title: 'Towels & Linen | Thabang Leruo Clothing',
  description: 'Shop our collection of premium towels and linen including bath towels, bed sheets, and duvet covers',
};

export const revalidate = 300;

export default async function TowelsLinenPage() {
  const data = await client.queries.page({
    relativePath: 'towels-linen.mdx',
  });

  return (
    <Layout rawPageData={data}>
      <ClientPage {...data} />
    </Layout>
  );
}
