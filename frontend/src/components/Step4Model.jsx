import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  CircularProgress,
  FormHelperText,
} from '@mui/material';
import axios from 'axios';

export default function Step4Model({ formData, setFormData, onNext }) {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const vehicleTypeId = formData.vehicleTypeId;

  useEffect(() => {
    if (vehicleTypeId) {
      axios
        .get(`http://localhost:3001/vehicles?typeId=${vehicleTypeId}`)
        .then((res) => {
          setModels(res.data);
          setLoading(false);
        })
        .catch(() => {
          setModels([]);
          setLoading(false);
        });
    }
  }, [vehicleTypeId]);

  const handleChange = (e) => {
    setFormData({ ...formData, vehicleId: parseInt(e.target.value) });
    setError(false);
  };

  const handleNext = () => {
    if (!formData.vehicleId) {
      setError(true);
    } else {
      setError(false);
      onNext();
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Select Specific Vehicle Model
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <RadioGroup
            value={formData.vehicleId?.toString() || ''}
            onChange={handleChange}
          >
            {models.map((vehicle) => (
              <FormControlLabel
                key={vehicle.id}
                value={vehicle.id.toString()}
                control={<Radio />}
                label={vehicle.modelName}
              />
            ))}
          </RadioGroup>
          {error && <FormHelperText error>Please select a vehicle model</FormHelperText>}
          <Button variant="contained" onClick={handleNext} sx={{ mt: 2 }}>
            Next
          </Button>
        </>
      )}
    </Box>
  );
}
