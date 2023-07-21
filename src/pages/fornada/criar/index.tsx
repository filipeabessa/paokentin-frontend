import CreateBatchForm from '@/components/forms/CreateBatchForm';
import Box from '@/components/layout/Box';
import Navbar from '@/components/surfaces/Navbar';
import BaseLayout from '@/layouts/Base';
import React, { FC } from 'react';

// import { Container } from './styles';

const CreateBatchPage: FC = () => {
  return (
    <BaseLayout
      pageTitle='Criação de Fornada'
    >
      <Box
        minWidth="800px"
      >
        <CreateBatchForm />
      </Box>
    </BaseLayout>
  );
}

export default CreateBatchPage;