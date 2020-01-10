require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const mongoose = require('mongoose');
const hotelRoutes = require('./routes/hotels');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Replace with your mongoLab URI
const MONGO_URI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}
mongoose.connect(MONGO_URI, {
  useMongoClient: true
});
mongoose.connection
  .once('open', () => console.log('Mongodb connected'))
  .on('error', error => console.log(`ERROR: connecting to Database: ${error}`));

const router = express.Router();
const port = process.env.PORT || 3000;

router.get('/', function(req, res) {
   res.send('Hello World!');
});
app.use(router);

// API routes
router.route('/hotels')
  .get(hotelRoutes.findAll);

router.route('/hotel/:id')
  .get(hotelRoutes.findById)

app.use('/api', router);

app.listen(port, () => {
  console.log(`Node server running on http://localhost:${port}`);
});
