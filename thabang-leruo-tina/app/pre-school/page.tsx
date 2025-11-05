import React from 'react';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout/layout';
import ClientPage from '../[...urlSegments]/client-page';

export const metadata = {
  title: 'Pre School Uniforms | Thabang Leruo Clothing',
  description: 'Shop our collection of pre-school uniforms including tracksuits, winter wear, and summer sets',
};

export const revalidate = 300;

export default async function PreSchoolPage() {
  const data = await client.queries.page({
    relativePath: 'pre-school.mdx',
  });

  return (
    <Layout rawPageData={data}>
      <ClientPage {...data} />
    </Layout>
  );
}
