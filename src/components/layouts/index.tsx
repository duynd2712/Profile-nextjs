import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Head from 'next/head';
import * as React from 'react';
export interface ILayout {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: ILayout) {
  return (
    <Box>
      <Container maxWidth="lg">
        <Head>
          <title>{title}</title>
        </Head>
        <Box>{children}</Box>
      </Container>
    </Box>
  );
}
