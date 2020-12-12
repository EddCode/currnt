const boom = require('boom');

const errorWithStack = (err, stack) => {
  return { ...err, stack };
};

const errorLog = (err, req, res, next) => {
    next(err);
};

const wrapError = (err, req, res, next) => {
  if (!err.isBoom) {
    return next(boom.badImplementation(err));
  }

  const {
    output: { payload, statusCode },
  } = err;

  res.setHeader('Content-Type', 'application/json');
  return res.status(statusCode).json(errorWithStack(payload, err.stack));
};

module.exports = {
  errorLog,
  wrapError,
};
