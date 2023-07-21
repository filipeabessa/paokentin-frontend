import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

interface CustomLinkProps extends NextLinkProps {
  children: React.ReactNode;
  sx?: any;
  href: string;
}

const Link: React.FC<CustomLinkProps> = ({ 
  href, children }) => {
  return (
      <MuiLink
      href={href} 
      component={NextLink}
      >
        {children}
      </MuiLink>
  );
};

export default Link;