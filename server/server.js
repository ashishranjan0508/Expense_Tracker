const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

const userRoutes = require('./routes/userRoutes.js');
// ...other route imports...

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Apply no-cache headers only to non-API routes
// app.use((req, res, next) => {
//   if (!req.path.startsWith("/api")) {
//     res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
//     res.setHeader("Pragma", "no-cache");
//     res.setHeader("Expires", "0");
//   }
//   next();
// });

// Register API routes
app.use('/api/users', userRoutes);
// ...other routes...

// (Optional) If you serve React build from Express
// app.use(express.static(path.join(__dirname, 'client/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
