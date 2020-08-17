const express = require('express');
const path = require('path');


// Define app and PORT
const app = express();
const PORT = process.env.PORT || 5000;


// Front-end connected
app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});


app.listen(PORT, console.log(`Server running on port: ${PORT}`));