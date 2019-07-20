const express = require('express');
const connectDB = require('./config/db');
const { PORT } = require('./config/server');
const path = require('path');

const app = express();

// Connect db
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
