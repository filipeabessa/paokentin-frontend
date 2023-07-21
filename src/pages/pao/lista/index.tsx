import BreadTypeCard from '@/components/inputs/BreadTypeCard';
import Box from '@/components/layout/Box';
import BaseLayout from '@/layouts/Base';
import { FC, useEffect, useState } from 'react';

// import { Container } from './styles';

const BreadListPage: FC = () => {
  const [breadTypes, setBreadTypes] = useState<any>([]);

  useEffect(() => {
    getBreadTypes();
  }, []);
  
  const getBreadTypes = async () => {
    const response = await fetch('http://localhost:8080/breadtypes');
    const data = await response.json();
    setBreadTypes(data);
  }
  return (
    <BaseLayout
      pageTitle='Lista de Pães'
    >
      <Box
        display="flex"
        flexWrap="wrap"
        gap="10px"
        padding="20px"
      >
        {
          breadTypes.map((breadType: any) => (
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

export default BreadListPage;