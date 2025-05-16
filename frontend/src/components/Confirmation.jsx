import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function Confirmation({ onReset }) {
  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
         Booking Successful!
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Thank you for your booking. We will contact you soon with details.
      </Typography>
      <Button variant="contained" onClick={onReset}>
        Make Another Booking
      </Button>
    </Box>
  );
}
