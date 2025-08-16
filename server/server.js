
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes.js');
// ...other route imports...

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

// Register routes
app.use('/api/users', userRoutes);
// ...other routes...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});