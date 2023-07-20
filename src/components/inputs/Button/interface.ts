import { ICssProperties } from '@/types';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

interface ButtonProps extends ICssProperties, MuiButtonProps  {
  variant?: 'contained' | 'outlined' | 'text';
  href?: string;
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
}

export default ButtonProps;
