import React from 'react';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout/layout';
import ClientPage from '../[...urlSegments]/client-page';

export const metadata = {
  title: 'Chef & Kitchen Uniforms | Thabang Leruo Clothing',
  description: 'Shop our collection of chef and kitchen uniforms including jackets, pants, aprons, and hats',
};

export const revalidate = 300;

export default async function ChefKitchenUniformsPage() {
  const data = await client.queries.page({
    relativePath: 'chef-kitchen-uniforms.mdx',
  });

  return (
    <Layout rawPageData={data}>
      <ClientPage {...data} />
    </Layout>
  );
}
