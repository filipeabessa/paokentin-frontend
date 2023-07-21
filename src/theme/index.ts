import { createTheme } from '@mui/material/styles';
import typography from './tokens/typography';
import palette from './tokens/palette';

const theme = createTheme({
  typography,
  palette,
});

export default theme;
