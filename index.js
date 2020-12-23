const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
// Recomendado para produccion
// const corsOptions = { origin: "http://example.com" };
// app.use(cors(corsOptions));

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// body parser
app.use(express.json());

// routes
moviesApi(app);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
