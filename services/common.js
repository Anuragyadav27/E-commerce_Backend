const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  // token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzIxMGJjMTU3YzI4ZjQyM2E1NjM2MiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5Nzc4MDE0OX0.7NK_xl8GEBTxVd72C4HVYFWM_A6I6yxSmcXiR3Sshh0"
   return token;
};
