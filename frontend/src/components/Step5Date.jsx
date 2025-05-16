import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  FormHelperText,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Step5Date({ formData, setFormData, onNext }) {
  const [error, setError] = useState(false);

const handleNext = async () => {
  if (!formData.startDate || !formData.endDate) {
    setError(true);
    return;
  }

  try {
    const res = await fetch('http://localhost:3001/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        vehicleId: formData.vehicleId,
        startDate: formData.startDate,
        endDate: formData.endDate,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert(`✅ Booking successful! Booking ID: ${data.bookingId}`);
      onNext(); // proceed to confirmation page only if successful
    } else {
      alert(`❌ Booking failed: ${data.error}`);
    }
  } catch (err) {
    alert(`❌ Something went wrong: ${err.message}`);
  }
};

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Select Date Range
        </Typography>
        <DatePicker
          label="Start Date"
          value={formData.startDate || null}
          onChange={(newDate) =>
            setFormData({ ...formData, startDate: newDate })
          }
          renderInput={(params) => <params.TextField fullWidth margin="normal" />}
        />
        <DatePicker
          label="End Date"
          value={formData.endDate || null}
          onChange={(newDate) =>
            setFormData({ ...formData, endDate: newDate })
          }
          renderInput={(params) => <params.TextField fullWidth margin="normal" />}
        />
        {error && (
          <FormHelperText error>Please select both start and end dates</FormHelperText>
        )}
        <Button variant="contained" onClick={handleNext} sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </LocalizationProvider>
  );
}
