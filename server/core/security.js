const passport = require('passport');
const { Strategy } = require('passport-local');
const bcrypt = require('bcrypt');
const { User } = require('../models/user.model');

passport.use(new Strategy({
  session: true,
}, async (username, password, done) => {
  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return done(null, false);
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return done(null, false);
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);

    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

module.exports = passport;
