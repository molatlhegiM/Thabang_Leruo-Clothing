import React from 'react';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout/layout';
import ClientPage from '../[...urlSegments]/client-page';

export const metadata = {
  title: 'Warehouse Uniforms | Thabang Leruo Clothing',
  description: 'Shop our collection of warehouse uniforms including high-visibility vests, safety jackets, and coveralls',
};

export const revalidate = 300;

export default async function WarehouseUniformsPage() {
  const data = await client.queries.page({
    relativePath: 'warehouse-uniforms.mdx',
  });

  return (
    <Layout rawPageData={data}>
      <ClientPage {...data} />
    </Layout>
  );
}
