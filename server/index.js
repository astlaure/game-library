const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const csurf = require('csurf');
const path = require('path');

const config = require('./core/config');
const database = require('./core/database');
const logger = require('./core/logger');
const security = require('./core/security');
const securityRouter = require('./routes/security.router');
const gameRouter = require('./routes/game.router');
const appRouter = require('./routes/app.router');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession({
  secret: config.secretKey,
}));
app.use(security.initialize());
app.use(security.session());
app.use(csurf());

app.use(express.static(path.resolve(process.cwd(), 'public')));
app.use('api/v1/security', securityRouter);
app.use('api/v1/games', gameRouter);
app.use(appRouter);

database.sync()
  .then(() => app.listen(config.port, () => logger.info(`server started on port ${config.port}.`)))
  .catch((err) => logger.error(err.message));
