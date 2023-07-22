import Card from "@/components/surfaces/Card";
import { FC, ReactElement, use, useEffect } from "react";
import Typography from "@/components/dataDisplay/Typography";

interface BatchCardProps {
  batchId: number;
  breadsQuantity: number;
  backgroundColor?: string;
  breadType: any;
  children?: ReactElement;
}

const BatchCard: FC<BatchCardProps> = ({
  batchId,
  breadsQuantity,
  breadType,
  children,
}) => {

  return (
    <Card
      width="250px"
      padding="10px"
      elevation={2}
      background={breadType?.relatedColor}
    >
      <Typography>
        <strong>Id da Fornada:</strong> {batchId}
      </Typography>
      <Typography>
        <strong>Tipo de pão: </strong>
        {breadType?.name}
      </Typography>
      <Typography>
        <strong>Quantidade de pães:</strong> {breadsQuantity}
      </Typography>

      {
        children
      }
    </Card>
  );
};

export default BatchCard;
