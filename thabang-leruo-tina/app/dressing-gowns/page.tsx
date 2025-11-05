import React from 'react';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout/layout';
import ClientPage from '../[...urlSegments]/client-page';

export const metadata = {
  title: 'Luxury Dressing Gowns | Thabang Leruo Clothing',
  description: 'Shop our collection of luxury dressing gowns including terry robes, spa robes, and bathrobes',
};

export const revalidate = 300;

export default async function DressingGownsPage() {
  const data = await client.queries.page({
    relativePath: 'dressing-gowns.mdx',
  });

  return (
    <Layout rawPageData={data}>
      <ClientPage {...data} />
    </Layout>
  );
}
