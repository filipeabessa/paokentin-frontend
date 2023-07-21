import Typography from '@/components/dataDisplay/Typography';
import Box from '@/components/layout/Box';
import Navbar from '@/components/surfaces/Navbar';
import React, { FC, ReactElement } from 'react';

interface BaseLayoutProps {
  pageTitle: string;
  children?: ReactElement;
}

const BaseLayout: FC<BaseLayoutProps> = ({
  pageTitle,
  children
}) => {
  return (
    <>
      <Navbar />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
          height="100vh"
          padding="20px"
        >
          <Typography 
            variant="h1"
            color="black.main"
          >
            {pageTitle}
          </Typography>
          {
          children
          }
        </Box>
    </>
  );
}

export default BaseLayout;