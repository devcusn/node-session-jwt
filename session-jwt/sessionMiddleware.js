const sessionStore = require("./session_store.js");
const Session = require("./sesion.js");

const sessionMiddleware = () => {
  return (req, res, next) => {
    const token = req.cookies.token;

    if (token) {
      const verify = verifyToken(token);
      if (verify.type) {
        req.session = sessionStore.find(
          (session) => session.sessionID === verify.data.sessionID
        );
      }
    } else {
      req.session = new Session();
    }

    if (req.c) next();
  };
};

module.exports = sessionMiddleware;
