const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sequelize, VehicleType, Vehicle, Booking, User } = require('./models');
const { Op } = require('sequelize');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Test API
app.get('/', (req, res) => {
  res.send('API is running 🚗');
});

app.get('/vehicle-types', async (req, res) => {
  const wheels = parseInt(req.query.wheels);
  if (![2, 4].includes(wheels)) return res.status(400).json({ error: 'Invalid wheels number' });

  const types = await VehicleType.findAll({ where: { wheels } });
  res.json(types);
});

app.get('/vehicles', async (req, res) => {
  const typeId = parseInt(req.query.typeId);
  if (!typeId) return res.status(400).json({ error: 'Missing typeId' });

  const vehicles = await Vehicle.findAll({ where: { vehicleTypeId: typeId } });
  res.json(vehicles);
});

app.post('/book', async (req, res) => {
  const { firstName, lastName, vehicleId, startDate, endDate } = req.body;

  if (!firstName || !lastName || !vehicleId || !startDate || !endDate) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Check for overlapping booking
  const overlap = await Booking.findOne({
    where: {
	  vehicleId,
	  [Op.or]: [
		{
		  startDate: { [Op.between]: [startDate, endDate] }
		},
		{
		  endDate: { [Op.between]: [startDate, endDate] }
		},
		{
		  [Op.and]: [
			{ startDate: { [Op.lte]: startDate } },
			{ endDate: { [Op.gte]: endDate } }
		  ]
		}
	  ]
	}
  });

  if (overlap) {
    return res.status(409).json({ error: 'Vehicle already booked for selected dates' });
  }

  const user = await User.create({ firstName, lastName });
  const booking = await Booking.create({ userId: user.id, vehicleId, startDate, endDate });

  res.json({ message: 'Booking successful', bookingId: booking.id });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});