import React from 'react';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout/layout';
import ClientPage from '../[...urlSegments]/client-page';

export const metadata = {
  title: 'Industrial & Mining Uniforms | Thabang Leruo Clothing',
  description: 'Shop our collection of heavy-duty industrial and mining uniforms including coveralls and safety wear',
};

export const revalidate = 300;

export default async function IndustrialMiningPage() {
  const data = await client.queries.page({
    relativePath: 'industrial-mining.mdx',
  });

  return (
    <Layout rawPageData={data}>
      <ClientPage {...data} />
    </Layout>
  );
}
