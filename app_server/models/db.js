const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://katlaharshavardhanreddy:Harsha@cluster0.b3y90.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/db';

// Remove deprecated options
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
  console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};
require('./locations');

// Uncomment if you need graceful shutdown for nodemon restarts or app termination
// For nodemon restarts
// process.once('SIGUSR2', () => {
//   gracefulShutdown('nodemon restart', () => {
//     process.kill(process.pid, 'SIGUSR2');
//   });
// });

// For app termination
// process.on('SIGINT', () => {
//   gracefulShutdown('app termination', () => {
//     process.exit(0);
//   });
// });