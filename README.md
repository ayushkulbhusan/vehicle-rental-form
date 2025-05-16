🚗 Vehicle Rental Form — Full Stack Project

This is my submission for the Octalogic Tech Full Stack Test 2024.
It’s a full stack vehicle rental form app with booking validation and date conflict prevention.
🛠️ Tech Stack

    Frontend: React.js, Material UI, Axios

    Backend: Node.js, Express.js, Sequelize ORM

    Database: SQLite (local file database)

    Date Handling: @mui/x-date-pickers, date-fns

🚀 How to Run
🔧 Backend

    Navigate to the backend folder:

cd backend

    Install backend dependencies:

npm install

    Start the backend server:

npx nodemon index.js

    The server will run on:
    http://localhost:3001

👉 The SQLite database file database.sqlite is located inside the backend folder and preloaded with sample data.
💻 Frontend

    Navigate to the frontend folder:

cd frontend

    Install frontend dependencies:

npm install

    Start the frontend app:

npm start

    The frontend runs on:
    http://localhost:3000

📡 API Endpoints
Method	Endpoint	Purpose
GET	/vehicle-types?wheels=2	Get vehicle types by wheel count
GET	/vehicles?typeId=1	Get vehicle models by type
POST	/book	Submit a booking request
POST /book request body example:

{
  "firstName": "John",
  "lastName": "Doe",
  "vehicleId": 3,
  "startDate": "2025-06-01",
  "endDate": "2025-06-03"
}

✅ Features

    Multi-step form with step-by-step validation

    Live API integration for dynamic vehicle types and models

    Date range picker with overlapping booking check

    Confirmation screen on successful booking

    Alert if booking conflicts exist

📁 Database

    Uses SQLite and stores data in backend/database.sqlite

    Sequelize models: User, VehicleType, Vehicle, Booking

    Migrations and seeders are preloaded with sample data

🙋‍♂️ Author

Ayush Kulbhusan
LinkedIn Profile
📨 Notes

    The app works fully offline with SQLite

    You can run the frontend and backend locally in two terminals

    Let me know if you'd like a walkthrough or demo

Thank you for the opportunity!
