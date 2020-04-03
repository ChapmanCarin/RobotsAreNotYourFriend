const mysql = require('mysql');
require('dotenv').config();

const {
  HOST,
  USERNAME,
  PASSWORD,
  DATABASE,
} = process.env

const connection = mysql.createConnection({
  host: HOST,
  user: USERNAME,
  password: PASSWORD,
  database: DATABASE,
})

const goGetRobots = () => new Promise((resolve, reject) => {
  const insertValue = `SELECT * FROM robots`;

  connection.query(insertValue, (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(results);
  });
});

const insertRobot = (robot) => new Promise((resolve, reject) => {
  const insertText = 'INSERT INTO robots(robots_id, model, description) VALUES (DEFAULT, ?)';
  const insertValues = [robot.model, robot.description];

  connection.query(insertText, [insertValues], (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(results);
  });
});


module.exports = {
  goGetRobots,
  insertRobot
};