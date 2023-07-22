import BatchCard from '@/components/dataDisplay/BatchCard';
import Timer from '@/components/dataDisplay/Timer';
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
          batches.map((batch: any) => (
            <BatchCard 
              batchId={batch?.id}
              breadsQuantity={batch?.breadsQuantity}
              key={`batch-${batch?.id}`}
              breadType={batch?.breadType}
            >
              <Timer 
                finishedAt={batch?.finishAt}
              />
            </BatchCard>
          ))
        }        
      </Box>
    </BaseLayout>
  );
}

export default BatchListPage;