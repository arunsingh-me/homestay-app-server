const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

//import routes
const authRoutes = require('./routes/auth');

if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const app = express();
const PORT = process.env.PORT || 5000;

// Database Connection
mongoose
    .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
    .then(() => console.log("Connected to the Database"))
    .catch((error) => console.error(error));

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api', authRoutes);

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
});
