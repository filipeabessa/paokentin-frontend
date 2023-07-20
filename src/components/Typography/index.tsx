import { FC } from 'react';
import MuiTypography from '@mui/material/Typography';
import { ITypography } from './interface';

const Typography: FC<ITypography> = ({
  children,
  variant,
  color,
  ...props
}) => {
  return (
    <MuiTypography variant={variant} color={color} {...props}>
      {children}
    </MuiTypography>
  );
}

export default Typography;
