import CreateBreadTypeForm from '@/components/forms/CreateBreadTypeForm';
import Button from '@/components/inputs/Button';
import Box from '@/components/layout/Box';
import Card from '@/components/surfaces/Card';
import BaseModal from '@/components/surfaces/modals/BaseModal';
import BaseLayout from '@/layouts/Base';
import React, { useState } from 'react';

// import { Container } from './styles';

const BakerPage: React.FC = () => {
  const [createBreadTypeModalOpen, setCreateBreadTypeModalOpen] = useState(false);

  const handleOpenCreateBreadTypeModal = () => {
    setCreateBreadTypeModalOpen(true);
  };

  const handleCloseCreateBreadTypeModal = () => {
    setCreateBreadTypeModalOpen(false);
  };

  const createBreadType = async (requestBody: any) => {
    console.log(requestBody);
  };

  return (
    <>
      <BaseLayout
        pageTitle='Página do padeiro'
      >
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
              <Button
                href='/fornada/criar'
              >
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
                <Button
                  onClick={handleOpenCreateBreadTypeModal}
                >
                  Cadastrar tipo de pão
                </Button>
              </Box>
            </Card>
          </Box>
        </BaseLayout>   

        <BaseModal
          open={createBreadTypeModalOpen}
          handleClose={handleCloseCreateBreadTypeModal}
          title="Cadastrar tipo de pão"
        >
          <CreateBreadTypeForm
            handleCloseModal={handleCloseCreateBreadTypeModal}
            handleSubmitForm={createBreadType}          
          />
        </BaseModal>
    </>
  );
}

export default BakerPage;