import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

interface CustomLinkProps extends Omit<NextLinkProps, 'passHref'> {
  MuiProps?: Omit<MuiLinkProps, 'href'>;
  children: React.ReactNode;
}

const Link: React.FC<CustomLinkProps> = ({ href, MuiProps, children }) => {
  return (
    <NextLink 
      href={href} 
      passHref
      style={{
        textDecoration: 'none',
      }}
    >
      <MuiLink 
        {...MuiProps}
        sx={{
          textDecoration: 'none',
        }}
      >
        {children}
      </MuiLink>
    </NextLink>
  );
};

export default Link;