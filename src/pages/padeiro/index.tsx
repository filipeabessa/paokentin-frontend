import BatchCard from '@/components/dataDisplay/BatchCard';
import CreateBreadTypeForm from '@/components/forms/CreateBreadTypeForm';
import Button from '@/components/inputs/Button';
import Box from '@/components/layout/Box';
import Card from '@/components/surfaces/Card';
import BaseModal from '@/components/surfaces/modals/BaseModal';
import BaseLayout from '@/layouts/Base';
import { FC, useEffect, useState } from 'react';

const BakerPage: FC = () => {
  const [createBreadTypeModalOpen, setCreateBreadTypeModalOpen] = useState(false);
  const [batches, setBatches] = useState<any>([]);

  const handleOpenCreateBreadTypeModal = () => {
    setCreateBreadTypeModalOpen(true);
  };

  const handleCloseCreateBreadTypeModal = () => {
    console.log("testebla")
    setCreateBreadTypeModalOpen(false);
  };

  const createBreadType = async (requestBody: any) => {
    const response = await fetch('http://localhost:8080/breadtypes',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    return response;
  };

  const getBatches = async () => {
    const response = await fetch("http://localhost:8080/batches");
    console.log(response)
    const data = await response.json();

    console.log(data);

    setBatches(data)
  }

  useEffect(() => {
    getBatches();
  }, []);



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
                flexDirection="column"
                gap="10px"
              >
              <Button
                href='/fornada/criar'
              >
                  Cadastrar fornada
              </Button>
              {
                batches.length > 0 && batches.map((batch : any) => {
                  <BatchCard 
                    batchId={batch.id}
                    breadsQuantity={batch.quantity}
                  />
                })
              }
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