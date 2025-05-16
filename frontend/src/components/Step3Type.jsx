import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  CircularProgress,
  FormHelperText
} from '@mui/material';
import axios from 'axios';

export default function Step3Type({ formData, setFormData, onNext }) {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const wheels = formData.wheels;

  useEffect(() => {
    if (wheels) {
      axios
        .get(`http://localhost:3001/vehicle-types?wheels=${wheels}`)
        .then((res) => {
          setVehicleTypes(res.data);
          setLoading(false);
        })
        .catch(() => {
          setVehicleTypes([]);
          setLoading(false);
        });
    }
  }, [wheels]);

  const handleChange = (e) => {
    setFormData({ ...formData, vehicleTypeId: parseInt(e.target.value) });
    setError(false);
  };

  const handleNext = () => {
    if (!formData.vehicleTypeId) {
      setError(true);
    } else {
      setError(false);
      onNext();
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Select Vehicle Type
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <RadioGroup
            value={formData.vehicleTypeId?.toString() || ''}
            onChange={handleChange}
          >
            {vehicleTypes.map((type) => (
              <FormControlLabel
                key={type.id}
                value={type.id.toString()}
                control={<Radio />}
                label={type.name}
              />
            ))}
          </RadioGroup>
          {error && <FormHelperText error>Please select a vehicle type</FormHelperText>}
          <Button variant="contained" onClick={handleNext} sx={{ mt: 2 }}>
            Next
          </Button>
        </>
      )}
    </Box>
  );
}
