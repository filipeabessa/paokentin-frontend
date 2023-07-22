import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Image from 'next/image'
import Link from '@/components/Link';
import Box from '@/components/layout/Box';
import { NavLinkProperties } from './types';

const pages : NavLinkProperties[] = [
  {label:'Lista de fornadas', path: "/fornada/lista"}, 
  {label:'Página do padeiro', path: "/padeiro"}, 
];

function ResponsiveAppBar() {

  return (
    <AppBar position="static" color="inherit"
    >
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/"
            sx={{
              marginTop: '50px',
            }}
          >
            <Image
              src="/paokentin-logo.png"
              alt="logo"
              width={150}
              height={50}         
            />
          </Link>
          <Box 
            display="flex"
            gap="2rem"
          >
            {pages.map((page) => (
              <Link
                href={page.path}
                key={page.label}
              >
                  {page.label}
              </Link>
            ))}

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;