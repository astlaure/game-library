/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 * */
const middleware = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.sendStatus(401);
  }

  return next();
};

module.exports = middleware;
