import React from 'react';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout/layout';
import ClientPage from '../[...urlSegments]/client-page';

export const metadata = {
  title: 'Work Overalls | Thabang Leruo Clothing',
  description: 'Shop our collection of durable work overalls including bib overalls and mechanic coveralls',
};

export const revalidate = 300;

export default async function WorkOverallsPage() {
  const data = await client.queries.page({
    relativePath: 'work-overalls.mdx',
  });

  return (
    <Layout rawPageData={data}>
      <ClientPage {...data} />
    </Layout>
  );
}
