import { FC, useEffect, useState } from 'react';
import CreateBatchForm from '@/components/forms/CreateBatchForm';
import Box from '@/components/layout/Box';
import BaseLayout from '@/layouts/Base';


const CreateBatchPage: FC = () => {
  const [breadTypes, setBreadTypes] = useState<any>([]);

  const getBreadTypes = async () => {
    const response = await fetch('http://localhost:8080/breadtypes');
    const data = await response.json();
    setBreadTypes(data);
    return data;
  }

  useEffect(() => {
    getBreadTypes();
  }, []);

  const createBatch = async (requestBody: any) => {
    const response = await fetch('http://localhost:8080/batch',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    return response;
  }


  return (
    <BaseLayout
      pageTitle='Criação de Fornada'
    >
      <Box
        minWidth="800px"
        padding="100px"
      >
        <CreateBatchForm
          breadTypes={breadTypes}
          handleSubmitForm={createBatch}
        />
      </Box>
    </BaseLayout>
  );
}

export default CreateBatchPage;