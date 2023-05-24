// This is where we can start configuring passport.js
// to use the passport-jwt stategy

import passportJwt from "passport-jwt";

export function configureJwtStrategy(passport) {
  // passport.use() takes 2 arguments
  passport.use(
    // label for indentifying the strategy
    "jwt",
    new passportJwt.Strategy(
      // how to validate the token
      {
        secretOrKey: process.env.JWT_SECRET,
        jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
      },
      (jwtPayload, done) => {
        // this function is for manually validating the token
        console.log(jwtPayload);
        return done(null, {}); // skipping manual validation
      }
    )
  );
}
