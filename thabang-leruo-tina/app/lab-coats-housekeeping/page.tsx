import React from 'react';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout/layout';
import ClientPage from '../[...urlSegments]/client-page';

export const metadata = {
  title: 'Lab Coats & Housekeeping | Thabang Leruo Clothing',
  description: 'Shop our collection of lab coats and housekeeping uniforms for professionals',
};

export const revalidate = 300;

export default async function LabCoatsHousekeepingPage() {
  const data = await client.queries.page({
    relativePath: 'lab-coats-housekeeping.mdx',
  });

  return (
    <Layout rawPageData={data}>
      <ClientPage {...data} />
    </Layout>
  );
}
