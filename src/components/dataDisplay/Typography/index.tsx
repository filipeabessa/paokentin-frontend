import { FC } from 'react';
import MuiTypography, { TypographyProps } from '@mui/material/Typography';
import { ITypographyProps } from './interface';

const Typography: FC<TypographyProps> = ({
  children,
  variant,
  color,
  ...props
}) => {
  return (
    <MuiTypography 
      variant={variant} 
      color={color}
      {...props}
    >
      {children}
    </MuiTypography>
  );
}

export default Typography;
