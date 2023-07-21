import Card from '@/components/surfaces/Card';
import { FC } from 'react';
import Typography from '@/components/dataDisplay/Typography';

interface BatchCardProps {
  batchId: number;
  breadsQuantity: number;
}

const BatchCard: FC<BatchCardProps> = ({
  batchId,
  breadsQuantity,
}) => {
  return (
    <Card
      width="200px"
      height="100px"
      elevation={2}
    >
      <Typography>
        <strong>Id da Fornada:</strong> {batchId}        
      </Typography>
      <Typography>
      <strong>Quantidade de pães:</strong> {breadsQuantity}
      </Typography>
    </Card>
  );
}

export default BatchCard;