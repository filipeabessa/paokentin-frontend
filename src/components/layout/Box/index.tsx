import { FC } from 'react';
import MuiBox from '@mui/material/Box';
import BoxProps from './types';

const Box: FC<BoxProps> = ({
  position,
  width,
  height,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  children,
  background,
  ...props
}) => {
  return (
    <MuiBox
      position={position}
      width={width}
      height={height}
      display={display}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      sx={{
        backgroundColor: background,
      }}
      {...props}
    >
      {children}
    </MuiBox>
  );
}

export default Box;
