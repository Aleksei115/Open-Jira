import React from 'react'
import { FC } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import { Navbar, Sidebar } from '../UI';

//sx nos otorga ya un manejo del theme
//FlexGrow trata de abarcar el mayor espacio posible

interface Props {
    title?: string;
    children: React.ReactNode
}



export const Layout:FC<Props> = ({ title = 'OpenJira', children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box 
      sx={{ 
              flexGrow: 1
          
      }}
      >
          <Navbar />
          <Sidebar />

          <Box sx={{
              padding: '10px 20px',
          }}>
              { children }
          </Box>
      </Box>
    </>
  )
}
