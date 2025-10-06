const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// --- 1. IMPORT YOUR DATABASE CONNECTION ---
const sequelize = require('./config/db.js'); 

require('./models/userModel.js');
require('./models/budgetsModel.js');
require('./models/expensesModel.js');
require('./models/incomeModel.js');



const userRoutes = require('./routes/userRoutes.js');
// ...other route imports...

dotenv.config();

const app = express();

// --- CORS CONFIGURATION ---
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'http://localhost:5174'
];
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Expense Tracker API is running successfully!' });
});

// Register API routes
app.use('/api/users', userRoutes);
// ...other routes...

const PORT = process.env.PORT || 5000;


sequelize.sync()
  .then(() => {
    console.log("Database synced successfully.");
    // We only start the server after the database is ready.
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to sync database:', err);
  });











// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const path = require('path');

// const userRoutes = require('./routes/userRoutes.js');
// // ...other route imports...

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Register API routes
// app.use('/api/users', userRoutes);
// // ...other routes...


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


