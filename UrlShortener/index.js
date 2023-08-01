const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const port = process.env.PORT;
const MONGODURL = process.env.MONGODURL;

// Set up view engine and public folder
app.set('view engine', 'hbs');
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect(MONGODURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err));

// Use body-parser to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
});

// Import and use routes
const shortenRoute = require('./routes/shorten');
const visitRoute = require('./routes/visit');
const clicksRoute = require('./routes/clicks');

app.use(shortenRoute);
app.use(visitRoute);
app.use(clicksRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
