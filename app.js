const express = require('express');
const { PORT } = require('./config');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Hello from the server' });
});

app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
