import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

export default function Step1Name({ formData, setFormData, onNext }) {
  const [error, setError] = React.useState(false);

  const handleNext = () => {
    if (!formData.firstName || !formData.lastName) {
      setError(true);
    } else {
      setError(false);
      onNext();
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        What is your name?
      </Typography>
      <TextField
        label="First Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.firstName || ''}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        error={error && !formData.firstName}
        helperText={error && !formData.firstName ? 'First name is required' : ''}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.lastName || ''}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        error={error && !formData.lastName}
        helperText={error && !formData.lastName ? 'Last name is required' : ''}
      />
      <Button variant="contained" onClick={handleNext} sx={{ mt: 2 }}>
        Next
      </Button>
    </Box>
  );
}
