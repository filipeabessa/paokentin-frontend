import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
import { ICssProperties } from '@/types';

interface BoxProps extends MuiBoxProps {
  background?: string;
}

export default BoxProps;
