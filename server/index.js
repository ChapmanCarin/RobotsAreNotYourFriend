const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const { goGetRobots, insertRobot } = require('../database/dbindex')
const app = express();

const port = 4200;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../react-client/build')))

app.get('/robots', (req, res) => {
  goGetRobots()
    .then((robots) => {
      res.status(201).json(robots);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('your robot rebelled. Welcome to annihalation.');
    });
});

app.post('/makeRobot', (req, res) => {
  insertRobot(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('your robot rebelled. Welcome to annihalation.');
    });
});

app.listen(port, () => {
  console.log('listening on 4200');
});
