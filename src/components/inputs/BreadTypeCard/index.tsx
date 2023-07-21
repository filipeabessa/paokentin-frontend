import Card from '@/components/surfaces/Card';
import { darkenHexColor } from '@/utils';
import { FC } from 'react';

interface BreadTypeCardProps {
  handleClick?: () => void;
  backgroundColor: string;
  title: string;
  selected?: boolean;
}

const BreadTypeCard: FC<BreadTypeCardProps> = ({
  handleClick,
  backgroundColor,
  title,
  selected = false,
}) => {
  return (
    <button
      onClick={handleClick}
      style={{
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        padding: '0',
        background: 'transparent',
      }}
      type="button"
    >
      <Card
        title={title}
        titleVariant='h4'
        elevation={0}
        sx={{
          width: '100px',
          height: '100px',
          backgroundColor: selected ? 
          darkenHexColor(backgroundColor, 40)
          : backgroundColor,
        }}
      >
        
      </Card>
    </button>
  );
}

export default BreadTypeCard;