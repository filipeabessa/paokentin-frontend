import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Image from 'next/image'
import Link from '@/components/Link';
import Box from '@/components/layout/Box';
import Typography from '@/components/Typography';

const pages = ['Cadastro de pão', 'Lista de pães', 'Cadastro fornada'];

function ResponsiveAppBar() {

  return (
    <AppBar position="static" color="inherit">
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
                href={`/${page}`}
                key={page}
              >
                <Typography>
                  {page}
                </Typography>
              </Link>
            ))}

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;