import {
  Box,
  Button,
  Container,
  InputAdornment,
  Paper,
  TextField
} from '@material-ui/core';
import SearchIcon from '../../../icons/Search';
import AdjustmentIcon from '../../../icons/Adjustments';

const Modal3 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      p: 3,
      textAlign: '-webkit-center'
    }}
  >
    <Paper elevation={12} sx={{ flex: 1, textAlign: '-webkit-center', justifyContent: 'center', width: '80%', maxWidth: 'md' }}>
      <Box sx={{ p: 3 }}>
        <Container width="30%" maxWidth="md" sx={{ textAlign: '-webkit-center' }}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <AdjustmentIcon fontSize="small" />
                  </InputAdornment>
                )
              }}
              placeholder="Search..."
            />
            <Button
              color="primary"
              size="large"
              sx={{ ml: 2 }}
              variant="contained"
            >
              Search
            </Button>
          </Box>
        </Container>
      </Box>
    </Paper>
  </Box>
);

export default Modal3;
