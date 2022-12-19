const express = require("express");

const sessionMiddleware = require("./session-jwt/sessionMiddleware");

const app = express();
const PORT = 3000;

app.use(sessionMiddleware());

app.listen(PORT, () => {
  console.log(`Server listening on port  ${PORT}`);
});
