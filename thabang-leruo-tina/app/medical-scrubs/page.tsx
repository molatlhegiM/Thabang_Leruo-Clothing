import React from 'react';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout/layout';
import ClientPage from '../[...urlSegments]/client-page';

export const metadata = {
  title: 'Medical Scrubs & Lab Coats | Thabang Leruo Clothing',
  description: 'Shop our collection of medical scrubs and lab coats for healthcare professionals',
};

export const revalidate = 300;

export default async function MedicalScrubsPage() {
  const data = await client.queries.page({
    relativePath: 'medical-scrubs.mdx',
  });

  return (
    <Layout rawPageData={data}>
      <ClientPage {...data} />
    </Layout>
  );
}
