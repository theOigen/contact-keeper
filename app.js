const express = require('express');
const connectDB = require('./config/db');
const { PORT } = require('./config/server');

const app = express();

// Connect db
connectDB();

app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
