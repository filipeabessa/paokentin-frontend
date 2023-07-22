import BreadTypeCard from '@/components/inputs/BreadTypeCard';
import Box from '@/components/layout/Box';
import BaseLayout from '@/layouts/Base';
import { FC, useEffect, useState } from 'react';

const BatchListPage: FC = () => {
  const [batches, setBatches] = useState<any>([]);

  useEffect(() => {
    getBatches();
  }, []);
  
  const getBatches = async () => {
    const response = await fetch('http://localhost:8080/batches');
    const data = await response.json();
    setBatches(data);
  }
  return (
    <BaseLayout
      pageTitle='Lista de Fornadas'
    >
      <Box
        display="flex"
        flexWrap="wrap"
        gap="10px"
        padding="20px"
      >
        {
          batches.map((breadType: any) => (
            <BreadTypeCard 
              key={breadType.id}
              title={breadType.name}
              backgroundColor={breadType.relatedColor}
            />
          ))
        }        
      </Box>
    </BaseLayout>
  );
}

export default BatchListPage;