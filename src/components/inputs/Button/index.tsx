import { FC } from 'react';
import Link from '@/components/Link';
import MuiButton from '@mui/material/Button';

import ButtonProps from './interface';

const Button: FC<ButtonProps> = ({
  children,
  variant = 'contained',
  href,
  color = 'primary',
  marginTop,
  ...buttonProps
}) => {
  const renderMuiButton = () => (
    <MuiButton
      variant={variant}
      color={color}
      sx={{
        textTransform: 'none',
        fontWeight: '500',
        marginTop: { marginTop },
      }}
      {...buttonProps}
    >
      {children}
    </MuiButton>
  );

  return href ? (
    <Link href={href}>{renderMuiButton()}</Link>
  ) : (
    renderMuiButton()
  );
}

export default Button;
