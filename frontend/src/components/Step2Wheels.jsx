import React from 'react';
import {
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Typography,
  FormHelperText,
} from '@mui/material';

export default function Step2Wheels({ formData, setFormData, onNext }) {
  const [error, setError] = React.useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, wheels: parseInt(e.target.value) });
    setError(false);
  };

  const handleNext = () => {
    if (!formData.wheels) {
      setError(true);
    } else {
      setError(false);
      onNext();
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        How many wheels?
      </Typography>
      <RadioGroup value={formData.wheels?.toString() || ''} onChange={handleChange}>
        <FormControlLabel value="2" control={<Radio />} label="2-Wheeler" />
        <FormControlLabel value="4" control={<Radio />} label="4-Wheeler" />
      </RadioGroup>
      {error && <FormHelperText error>Please select a wheel option</FormHelperText>}
      <Button variant="contained" onClick={handleNext} sx={{ mt: 2 }}>
        Next
      </Button>
    </Box>
  );
}
