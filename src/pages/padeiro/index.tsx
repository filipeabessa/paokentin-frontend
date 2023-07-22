import BatchCard from '@/components/dataDisplay/BatchCard';
import Typography from '@/components/dataDisplay/Typography';
import CreateBreadTypeForm from '@/components/forms/CreateBreadTypeForm';
import BreadTypeCard from '@/components/inputs/BreadTypeCard';
import Button from '@/components/inputs/Button';
import Box from '@/components/layout/Box';
import Card from '@/components/surfaces/Card';
import BaseModal from '@/components/surfaces/modals/BaseModal';
import BaseLayout from '@/layouts/Base';
import { FC, useEffect, useState } from 'react';

const BakerPage: FC = () => {
  const [createBreadTypeModalOpen, setCreateBreadTypeModalOpen] = useState(false);
  const [batches, setBatches] = useState<any>([]);
  const [breadTypes, setBreadTypes] = useState<any>([]);

  const handleOpenCreateBreadTypeModal = () => {
    setCreateBreadTypeModalOpen(true);
  };

  const handleCloseCreateBreadTypeModal = () => {
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
    const data = await response.json();

    setBatches(data)
  }

  const getBreadTypes = async () => {
    const response = await fetch('http://localhost:8080/breadtypes');
    const data = await response.json();
    setBreadTypes(data);
  }

  const handleSendCreateBreadTypeForm = async (requestBody: any) => {
    const response = await createBreadType(requestBody);
    if (response.status === 200) {
      handleCloseCreateBreadTypeModal();
      getBreadTypes();
    }
  }

  useEffect(() => {
    getBatches();
    getBreadTypes();
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
              minWidth='600px'
              title='Fornada'
              titleVariant='h2'
            >
              <Box
                display="flex"
                flexDirection="column"
                gap="10px"
                padding='10px'
              >
                <Button
                  href='/fornada/criar'
                  fullWidth
                >
                    Cadastrar fornada
                </Button>
                <Typography
                    variant="h4"
                    color="black.main"
                  >
                    Fornadas:
                  </Typography>
                <Box
                  display="flex"
                  flexWrap="wrap"
                  gap="10px"
                >
                  {
                    batches.length > 0 && batches?.map((batch : any) => (
                      <BatchCard 
                        batchId={batch.id}
                        breadsQuantity={batch.breadsQuantity}
                        key={`batch-${batch.id}`}
                        breadType={batch.breadType}
                      />
                    ))
                  }
                </Box>
              </Box>
            </Card>
            <Card
              marginTop='20px'
              minHeight='300px'
              minWidth='600px'
              title='Pão'
              titleVariant='h2'
            >
              <Box
                display="flex"
                flexDirection="column"
                gap="10px"
                padding='10px'
              >
                <Button
                  onClick={handleOpenCreateBreadTypeModal}
                >
                  Cadastrar tipo de pão
                </Button>
                <Typography
                    variant="h4"
                    color="black.main"
                  >
                    Tipos de pão:
                  </Typography>
                <Box
                  display="flex"
                  flexWrap="wrap"
                  gap="10px"
                >
                  {
                    breadTypes.length > 0 && breadTypes?.map((bread : any) => (
                      <BreadTypeCard 
                        title={bread.name}
                        backgroundColor={bread.relatedColor}
                        key={`breadtype-${bread.id}`}
                      />
                    ))
                  }
                </Box>
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
            handleSubmitForm={handleSendCreateBreadTypeForm}          
          />
        </BaseModal>
    </>
  );
}

export default BakerPage;