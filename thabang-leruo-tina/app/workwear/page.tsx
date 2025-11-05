import React from 'react';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout/layout';
import ClientPage from '../[...urlSegments]/client-page';

export const metadata = {
  title: 'Professional Workwear | Thabang Leruo Clothing',
  description: 'Shop our collection of durable workwear for all industries including pants, jackets, and safety wear',
};

export const revalidate = 300;

export default async function WorkwearPage() {
  const data = await client.queries.page({
    relativePath: 'workwear.mdx',
  });

  return (
    <Layout rawPageData={data}>
      <ClientPage {...data} />
    </Layout>
  );
}
