const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  UN_AUTHORIZED: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
};

class AppError extends Error {
  constructor(name, statusCode, description, isOperational, errorStack) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.errorStack = errorStack;
    Error.captureStackTrace(this);
  }
}

class APIError extends AppError {
  constructor(
    statusCode = STATUS_CODES.INTERNAL_ERROR,
    description = "Internal Server Error",
    isOperational = true
  ) {
    super(statusCode, description, isOperational);
  }
}

module.exports = {
  AppError,
  APIError,
  STATUS_CODES,
};
