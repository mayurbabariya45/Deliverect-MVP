const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env`;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
  DELIVERECT_API_URL: process.env.DELIVERECT_API_URL,
  DELIVERECT_API_TOKEN: process.env.DELIVERECT_API_TOKEN,
};
