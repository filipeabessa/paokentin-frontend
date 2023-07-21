import Typography from '@/components/dataDisplay/Typography';
import Button from '@/components/inputs/Button';
import Box from '@/components/layout/Box';
import Card from '@/components/surfaces/Card';
import Navbar from '@/components/surfaces/Navbar';
import { Container } from '@mui/material';
import React from 'react';

// import { Container } from './styles';

const BakerPage: React.FC = () => {
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
            Página do padeiro
          </Typography>
            <Box
              display="flex"
              gap="10px"
            >
            <Card
              marginTop='20px'
              minHeight='300px'
              minWidth='500px'
              title='Fornada'
              titleVariant='h2'
            >
              <Box
                display="flex"
                gap="10px"
              >
              <Button>
                  Cadastrar fornada
                </Button>
              </Box>
            </Card>
            <Card
              marginTop='20px'
              minHeight='300px'
              minWidth='500px'
              title='Pão'
              titleVariant='h2'
            >
              <Box
                display="flex"
                gap="10px"
              >
                <Button>
                  Cadastrar tipo de pão
                </Button>
              </Box>
            </Card>
          </Box>            
        </Box>
    </>
  );
}

export default BakerPage;