import { FC } from 'react';
import Box from '@/components/layout/Box';
import Link from '../../Link';
import navLinksProperties from './data';

const Navbar: FC = () => {
  return (
    <Box
      display="flex"
      gap="20px"
      alignItems="center"
      justifyContent="center"
      background="blue"
      padding="50px"
    >
      {
        navLinksProperties.map((navLink) => (
          <Link
            key={navLink.label}
            href={navLink.href}
            MuiProps={{
              variant: 'h6',
              color: 'common.white',
            }}
          >
            {navLink.label}
          </Link>
        ))
      }      
    </Box>
  )
}

export default Navbar;