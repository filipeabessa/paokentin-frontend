import Card from '@/components/surfaces/Card';
import { FC } from 'react';
import Typography from '@/components/dataDisplay/Typography';

const BatchCard: FC<any> = ({
  batchId,
  batchQuantity,
}) => {
  return (
    <Card>
      <Typography>
        {batchId}        
      </Typography>
      <Typography>
        {batchQuantity}
      </Typography>
    </Card>
  );
}

export default BatchCard;